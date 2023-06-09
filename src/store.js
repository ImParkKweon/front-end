import { createStore } from "vuex";

export default createStore({
  state: { 
    plan: [
        {
          "src": 'designer_plan_img',
          "name": "디자이너인 당신을 위해",
          "comment": "디자인 환경에 적합한 클라우드 노트북 서비스",
          "spec": [
            "빠른 그래픽 처리 가능 GPU",
            "넉넉한 메모리 사양",
            "우수한 색 재현률 Mac OS"
          ]
        },
        {
          "src": 'developer_plan_img',
          "name": "AI 개발 환경이 필요하신가요?",
          "comment": "AI 개발 환경을 위한 클라우드 노트북 서비스",
          "spec": [
            "Multi-GPU 가능",
            "추가 스토리지 제공",
            "개발에 적합한 Linux"
          ]
        },
        {
          "src": '3Ddesigner_plan_img',
          "name": "그래픽 소프트웨어 사용자를 위해",
          "comment": "높은 그래픽 사양의 클라우드 노트북 서비스",
          "spec": [
            "3D 작업을 위한 고성능 GPU 제공",
            "무거운 파일 커다란 스토리지",
            "3D 디스플레이에 적합한 Mac OS"
          ]
        }
      ]
  }
})