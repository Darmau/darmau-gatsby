query {
    videos(pagination: { page: 1, pageSize: 5 }) {
      data {
        attributes {
          Title
        }
      }
    }
  }

  {
    "data": {
      "videos": {
        "data": [
          {
            "attributes": {
              "Title": "雪后的四姑娘山"
            }
          },
          {
            "attributes": {
              "Title": "2021深圳延时摄影混剪"
            }
          },
          {
            "attributes": {
              "Title": "中国最美乡村 丹巴中路藏寨 雨后云雾缭绕 高清航拍"
            }
          },
          {
            "attributes": {
              "Title": "云南盐津摩旅 利用周末骑摩托成都往返盐津 最后一天长途跋涉430公里终于赶上周一的早会"
            }
          },
          {
            "attributes": {
              "Title": "敦煌雅丹 尽头的尽头"
            }
          }
        ]
      }
    }
  }