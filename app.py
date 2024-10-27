from flask import Flask, request, jsonify
from flask_cors import CORS  # CORS 모듈 임포트
import base64
import numpy as np
import cv2
from ultralytics import YOLO

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})  # CORS 활성화

# YOLO 모델 로드
model = YOLO("C:/Users/user/best_model.pt")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    image_data = data['image'].split(',')[1]
    image = np.frombuffer(base64.b64decode(image_data), np.uint8)
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)

    results = model.predict(source=image, save=False)

    predictions = []
    for result in results[0].boxes:
        predictions.append({
            'class': int(result.cls),
            'confidence': float(result.conf),
            'coordinates': result.xyxy.tolist()
        })

    return jsonify(predictions)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
