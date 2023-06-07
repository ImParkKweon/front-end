import {createStore} from "vuex";

export default createStore({
  state: { 
    plan: [
        {
          "src": 'designer_plan_img',
          "name": "디자이너인 당신을 위해",
          "comment": "디자인 환경에 적합한 클라우드 노트북 서비스",
          "spec": [
            "GPU 대박 1",
            "스토리지 짱큼 1",
            "예쁜 Mac OS 1"
          ]
        },
        {
          "src": 'developer_plan_img',
          "name": "AI 개발 환경이 필요하신가요?",
          "comment": "AI 개발 환경을 위한 클라우드 노트북 서비스",
          "spec": [
            "GPU 대박 2",
            "스토리지 짱큼 2",
            "예쁜 Mac OS 2"
          ]
        },
        {
          "src": '3Ddesigner_plan_img',
          "name": "3D 그래픽 어쩌구저쩌구",
          "comment": "높은 그래픽 사양의 클라우드 노트북 서비스",
          "spec": [
            "GPU 대박 3",
            "스토리지 짱큼 3",
            "예쁜 Mac OS 3"
          ]
        }
      ]
  }
})