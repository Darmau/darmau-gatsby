import React from "react"
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import VideoFrame from "../../components/video-frame/video-frame"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import * as style from "./index.module.css"
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

export default function VideoPlayer({ data }) {

  const video = data.allStrapiVideo.nodes[0]

  const [activeVideo, setActiveVideo] = React.useState(
    {
      url: video.source.xigua ? video.source.xigua : video.source.bilibili,
      iframeKey: 0
    }
  )

  // 根据传入参数决定set的state
  function switchVideo(platform) {
    let videoUrl = ''
    if (platform === 'bilibili') { videoUrl = video.source.bilibili }
    if (platform === 'youtube') { videoUrl = video.source.youtube }
    if (platform === 'xigua') { videoUrl = video.source.xigua }
    setActiveVideo(
      (prev) => {
        return {
          ...prev,
          url: videoUrl,
          iframeKey: prev.iframeKey + 1
        }
      }
    )
  }

  return (
    <Layout>
      <Breadcrumbs upLevel="videos" active={video.basic.title} />
      <main className={style.videoContainer}>
        <div className={style.videoFrame}>
          <VideoFrame src={activeVideo.url} key={activeVideo.iframeKey} title={video.basic.title} />
        </div>
        <div className={style.videoInfo}>
          <h4 className={style.videoTitle}>{video.basic.title}</h4>
          <p className={style.videoDate}>{video.basic.date}</p>
          <p className={style.videoDescription}>{video.basic.description}</p>

          <p className={style.sourceLabel}>播放源：</p>
          <div className={style.videoSource}>
            {video.source.bilibili &&
              <button onClick={() => switchVideo("bilibili")} onKeyDown={() => switchVideo("bilibili")}><svg className={style.platform} width="68" height="36" viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M68.1386 33.4114C67.8972 33.4114 67.6913 33.4302 67.4892 33.4077C67.0797 33.3619 66.6702 33.3709 66.2599 33.3589C65.9954 33.3522 66.0031 33.3522 65.9808 33.1033C65.9152 32.3437 65.8435 31.585 65.7733 30.8262C65.7124 30.1596 65.6545 29.4923 65.5874 28.8265C65.5265 28.2162 65.4533 27.6074 65.3869 26.9978C65.3237 26.425 65.2651 25.8514 65.1995 25.2793C65.1164 24.5592 65.0305 23.8394 64.9419 23.1199C64.8625 22.4841 64.7838 21.8468 64.6959 21.2117C64.5582 20.2271 64.4173 19.2429 64.2733 18.2591C64.1191 17.2109 63.934 16.1679 63.7404 15.1265C63.7057 14.9398 63.7103 14.933 63.8939 14.9031C64.6574 14.7763 65.4247 14.6684 66.2013 14.6849C66.2854 14.6871 66.3702 14.6886 66.4535 14.6991C66.59 14.7156 66.661 14.7801 66.6687 14.9345C66.6957 15.4729 66.7342 16.0112 66.7751 16.5488C66.8406 17.4298 66.9116 18.3108 66.9795 19.1911C67.0227 19.7579 67.0597 20.3232 67.1036 20.8886C67.1738 21.7973 67.2478 22.7053 67.3188 23.614C67.362 24.1696 67.3998 24.7267 67.4437 25.2823C67.5108 26.098 67.5841 26.9131 67.652 27.7281C67.6951 28.2469 67.7337 28.7665 67.7792 29.2854C67.8463 30.0539 67.9188 30.8224 67.9874 31.591C68.0391 32.1908 68.0861 32.7921 68.1386 33.4114V33.4114ZM38.5799 14.6931C38.6917 14.6931 38.8606 14.6811 39.0272 14.6961C39.2392 14.7149 39.2801 14.7681 39.2932 14.975C39.3541 15.9213 39.4112 16.8682 39.476 17.8152C39.547 18.8364 39.6248 19.8561 39.7027 20.8758C39.7745 21.8123 39.8462 22.7488 39.9233 23.6852C40.0074 24.7139 40.1007 25.7412 40.1855 26.7699C40.2495 27.5579 40.3043 28.3459 40.3706 29.1347C40.4338 29.8665 40.5079 30.5967 40.5757 31.3278C40.6336 31.9568 40.6922 32.5867 40.7485 33.2165C40.7662 33.4159 40.7516 33.4287 40.5302 33.4234C39.9511 33.4099 39.375 33.3439 38.7958 33.3597C38.6632 33.3634 38.6246 33.3042 38.6022 33.182C38.5544 32.9158 38.5621 32.6451 38.5328 32.376C38.4534 31.6644 38.4079 30.9499 38.3408 30.2368C38.2806 29.589 38.2081 28.9427 38.1395 28.2957C38.0786 27.7041 38.0184 27.1125 37.9536 26.5202C37.8889 25.9391 37.8202 25.3573 37.7524 24.7754C37.6899 24.2401 37.629 23.7047 37.5626 23.1694C37.4647 22.3851 37.3675 21.6009 37.2611 20.8181C37.1632 20.0998 37.0521 19.3837 36.948 18.6662C36.8061 17.6915 36.6465 16.719 36.4698 15.7503C36.4295 15.5309 36.3868 15.312 36.3418 15.0935C36.3187 14.9833 36.3395 14.9195 36.4691 14.9023C36.8099 14.8581 37.15 14.7891 37.4925 14.7568C37.8349 14.7261 38.1773 14.6639 38.5799 14.6931V14.6931ZM62.8335 24.1464C63.4859 24.1464 63.5013 24.1509 63.6062 24.7214C63.735 25.4255 63.8252 26.1355 63.9108 26.8456C64.0011 27.6021 64.0921 28.3586 64.1754 29.1159C64.2425 29.7255 64.2988 30.3366 64.362 30.9461C64.4283 31.585 64.4985 32.2215 64.5671 32.8596C64.6049 33.2202 64.6404 33.5809 64.6828 33.9408C64.6952 34.045 64.6628 34.1005 64.5571 34.1125C64.3342 34.1372 64.1129 34.1657 63.8908 34.1889C63.4836 34.2317 63.0756 34.2737 62.6677 34.3104C62.4571 34.3292 62.4432 34.3179 62.4039 34.12C62.0461 32.3242 61.6875 30.53 61.3327 28.7335C61.0967 27.5391 60.8669 26.344 60.6355 25.1496C60.6045 24.9852 60.5757 24.8205 60.5492 24.6555C60.5337 24.561 60.56 24.5003 60.6702 24.4748C61.4052 24.3076 62.1479 24.1786 62.8335 24.1464ZM35.4218 24.1464C36.1197 24.1464 36.1166 24.1486 36.2246 24.7642C36.3912 25.7172 36.5092 26.6754 36.6148 27.6366C36.7182 28.5693 36.8308 29.5013 36.9318 30.434C37.0004 31.0721 37.0544 31.7117 37.1184 32.349C37.1639 32.8026 37.2179 33.2547 37.2673 33.7076C37.2734 33.7631 37.2765 33.8186 37.2804 33.8748C37.2904 34.0967 37.2804 34.1147 37.0606 34.1365C36.6249 34.1807 36.1884 34.2174 35.7526 34.2594C35.5945 34.2744 35.4372 34.2969 35.2806 34.3119C35.0724 34.3307 35.0655 34.3299 35.0246 34.1252C34.8781 33.4062 34.7362 32.6856 34.5927 31.9666C34.2488 30.2346 33.901 28.5041 33.5593 26.7721C33.4228 26.0793 33.3056 25.3835 33.1714 24.69C33.1467 24.5632 33.1652 24.504 33.3002 24.4733C34.0282 24.3083 34.7609 24.1794 35.4218 24.1464V24.1464ZM44.6338 31.4088V34.3157C44.6338 34.3434 44.6307 34.3719 44.6346 34.3996C44.6492 34.5406 44.596 34.6028 44.4464 34.5968C44.2498 34.5886 44.0546 34.5938 43.858 34.5983C43.4477 34.6058 43.0367 34.5901 42.6271 34.6358C42.4004 34.6613 42.405 34.6478 42.3827 34.4154C42.3156 33.6836 42.2423 32.9526 42.1737 32.2208C42.1104 31.5452 42.0534 30.8682 41.9886 30.1926C41.923 29.4976 41.8498 28.8048 41.7834 28.1105C41.7379 27.6471 41.6978 27.1845 41.6577 26.7211C41.6053 26.1183 41.5567 25.5162 41.502 24.9134C41.4788 24.6592 41.4981 24.6232 41.7572 24.597C42.4258 24.5254 43.099 24.5051 43.7708 24.5363C43.9382 24.5452 44.1048 24.5767 44.2667 24.615C44.4711 24.6622 44.4935 24.6915 44.5043 24.8991C44.5266 25.3175 44.549 25.7359 44.5606 26.155C44.5737 26.6206 44.5629 27.087 44.5806 27.5526C44.6253 28.837 44.6184 30.1229 44.6338 31.4088V31.4088ZM71.9908 31.5407V34.2932C71.9908 34.3397 71.9892 34.3861 71.9915 34.4334C72.0015 34.5541 71.9437 34.5968 71.8257 34.5961C71.5357 34.5938 71.2465 34.5961 70.9573 34.5998C70.6303 34.6028 70.3041 34.6013 69.9779 34.6358C69.7627 34.6598 69.7612 34.6441 69.7419 34.4364C69.6532 33.4834 69.5599 32.5304 69.4705 31.576C69.3887 30.6965 69.3131 29.8162 69.2298 28.936C69.1442 28.028 69.0509 27.1222 68.9669 26.215C68.9252 25.7606 68.8905 25.3063 68.8558 24.8519C68.8419 24.654 68.8643 24.6187 69.0941 24.6007C69.4936 24.57 69.8915 24.5175 70.2941 24.5243C70.6951 24.5318 71.0969 24.51 71.4956 24.5842C71.8334 24.6472 71.8504 24.666 71.8704 25.0169C71.9283 26.0493 71.9106 27.0848 71.9483 28.1172C71.9869 29.2164 71.9599 30.3156 71.9908 31.5407ZM62.1525 19.1513C62.3885 19.1648 62.5743 19.1536 62.7594 19.1933C62.8774 19.2195 62.9368 19.2713 62.9484 19.3942C63.0039 19.9858 63.0641 20.5782 63.125 21.1705C63.1736 21.6511 63.2252 22.1317 63.2754 22.6123L63.28 22.6401C63.3201 22.943 63.3108 22.9512 63.0078 22.9677C62.7378 22.982 62.4687 23.0052 62.1988 23.0209C62.0214 23.0314 61.9651 23.0607 61.9358 22.8095C61.8348 21.9233 61.7175 21.0393 61.6057 20.1538C61.5747 19.9049 61.5403 19.6565 61.5024 19.4085C61.48 19.2683 61.5363 19.1911 61.6713 19.1798C61.8486 19.1641 62.026 19.1596 62.1525 19.1513V19.1513ZM34.8295 19.1551C35.0115 19.1648 35.1989 19.1513 35.3824 19.1926C35.4873 19.2158 35.5405 19.2585 35.5506 19.3748C35.5729 19.6522 35.6169 19.9288 35.6439 20.2063C35.7295 21.0573 35.8105 21.909 35.8907 22.7608C35.9076 22.946 35.9038 22.9497 35.7256 22.9625C35.4094 22.985 35.0925 23.0074 34.7755 23.0202C34.5912 23.0284 34.5681 23.0067 34.5449 22.8237C34.4647 22.1969 34.3891 21.5694 34.312 20.9418C34.2495 20.4244 34.1971 19.9071 34.1215 19.3912C34.1007 19.2488 34.1485 19.2098 34.2657 19.1866C34.4516 19.1498 34.6382 19.1618 34.8295 19.1551V19.1551ZM44.4518 21.4989C44.4518 22.038 44.4534 22.5763 44.451 23.1162C44.451 23.3583 44.448 23.3598 44.2004 23.3568C43.9026 23.3584 43.6049 23.3433 43.3089 23.3119C43.1176 23.2886 43.1138 23.2946 43.1084 23.0974C43.0891 22.4384 43.069 21.7793 43.0552 21.1202C43.0451 20.6741 43.0397 20.2295 43.012 19.7834C42.9973 19.5532 43.0104 19.5509 43.2379 19.548C43.5734 19.5442 43.9081 19.5592 44.2413 19.6087C44.4418 19.6387 44.451 19.6387 44.4518 19.8546C44.4534 20.4027 44.4534 20.9508 44.4534 21.4996H44.4518V21.4989ZM71.8226 21.5131C71.8226 22.053 71.8242 22.5921 71.8219 23.1312C71.8219 23.3576 71.818 23.3591 71.5843 23.3576C71.2775 23.3549 70.9708 23.3409 70.6651 23.3156C70.5131 23.3044 70.4684 23.2421 70.4784 23.1079C70.48 23.0892 70.4784 23.0704 70.4784 23.0517C70.4553 22.011 70.4321 20.971 70.4106 19.9303C70.4098 19.8749 70.4067 19.8194 70.409 19.7631C70.4121 19.5532 70.4129 19.548 70.6296 19.5495C70.928 19.5509 71.2242 19.5659 71.5219 19.5944C71.8851 19.6297 71.8211 19.6732 71.8226 19.9521C71.8242 20.4717 71.8234 20.9928 71.8226 21.5131V21.5131ZM34.0807 22.7788C34.0876 23.0749 34.0876 23.0742 33.7961 23.1432C33.5979 23.1904 33.3997 23.2421 33.1999 23.2849C33.0295 23.3224 32.9994 23.3014 32.9701 23.1387C32.7665 22.035 32.5637 20.9305 32.3616 19.8261C32.3208 19.5974 32.3316 19.5832 32.5629 19.5435C32.8475 19.4947 33.1313 19.4467 33.4159 19.404C33.5971 19.3763 33.6202 19.386 33.6565 19.5802C33.7282 19.9723 33.7961 20.366 33.8493 20.7611C33.9318 21.3864 33.9997 22.014 34.0737 22.6401C34.0799 22.6858 34.0783 22.733 34.0807 22.7788V22.7788ZM59.734 19.5749C60.1065 19.5157 60.4821 19.4557 60.8576 19.398C60.9926 19.3778 61.0335 19.4602 61.0512 19.5772C61.1152 20.0091 61.1954 20.4379 61.2479 20.8706C61.325 21.4974 61.4306 22.1212 61.4507 22.7533C61.4522 22.8178 61.4515 22.8837 61.453 22.9482C61.4569 23.0487 61.4052 23.1004 61.3096 23.1222C61.0551 23.1776 60.8006 23.2331 60.5468 23.2924C60.425 23.3209 60.3841 23.2706 60.3641 23.1552C60.2877 22.7158 60.1998 22.2787 60.1219 21.8408C59.99 21.1195 59.862 20.3975 59.734 19.6754C59.7309 19.6492 59.734 19.6214 59.734 19.5749V19.5749ZM42.6025 22.107C42.5917 22.4908 42.6156 22.8252 42.5616 23.1597C42.5454 23.2654 42.5138 23.3336 42.3966 23.3433C42.1451 23.3636 41.8945 23.3831 41.6446 23.4078C41.5235 23.4206 41.4896 23.3696 41.4696 23.2541C41.4133 22.913 41.4233 22.5673 41.3894 22.2247C41.3253 21.5776 41.2984 20.9261 41.2552 20.2767C41.2444 20.1185 41.2282 19.9618 41.2151 19.8036C41.2081 19.7152 41.2444 19.6657 41.3415 19.6619C41.667 19.6492 41.9909 19.5914 42.3179 19.6027C42.5091 19.6094 42.5253 19.6214 42.5392 19.8089C42.5477 19.9386 42.5454 20.0698 42.5485 20.2003L42.6025 22.107V22.107ZM69.9617 21.7351C69.9617 22.1819 69.9671 22.6288 69.9609 23.0757C69.9571 23.3081 69.9301 23.3284 69.7041 23.3486C69.4805 23.3688 69.2584 23.3853 69.0355 23.4086C68.9098 23.4213 68.8512 23.3853 68.8435 23.2451C68.8111 22.6513 68.7671 22.0575 68.7247 21.4644C68.6915 20.9725 68.6538 20.4814 68.6183 19.9903C68.6144 19.9341 68.6175 19.8779 68.6136 19.8224C68.6083 19.7241 68.6391 19.6664 68.7525 19.6627C69.0687 19.6522 69.3825 19.5929 69.701 19.6042C69.8954 19.6109 69.8985 19.6139 69.9131 19.8104C69.9602 20.4507 69.9648 21.0925 69.9617 21.7351V21.7351ZM33.1467 29.7225C33.5462 30.1499 33.5663 30.656 33.4344 31.1853C33.3017 31.7147 32.9994 32.151 32.6331 32.5424C32.0185 33.1962 31.2758 33.6791 30.4861 34.0892C29.1264 34.7955 27.6851 35.2649 26.1812 35.5423C25.0992 35.741 24.0103 35.894 22.9098 35.9524C22.5743 35.9704 22.2396 35.9854 21.9041 35.9832C21.6612 35.9832 21.4175 35.9899 21.1753 35.9817C20.9694 35.9742 20.9393 35.9397 20.9224 35.7305C20.8599 34.98 20.8067 34.2287 20.738 33.4782C20.6578 32.6084 20.5638 31.7394 20.4774 30.8697C20.4141 30.2406 20.3594 29.61 20.29 28.9825C20.2098 28.2432 20.1195 27.5054 20.0316 26.7661C19.9514 26.0838 19.8743 25.4 19.7895 24.7169C19.6946 23.9604 19.5967 23.2054 19.4926 22.4504C19.3906 21.7232 19.2845 20.9967 19.174 20.2707C18.9945 19.0759 18.7991 17.8834 18.5879 16.6935C18.417 15.7233 18.2268 14.7564 18.0172 13.7934C17.9895 13.6644 18.0296 13.6127 18.146 13.5654C19.262 13.1156 20.374 12.6575 21.4892 12.2053C21.6967 12.1214 21.9095 12.0509 22.1301 12.0111C22.2828 11.9834 22.3221 12.0141 22.3175 12.1633C22.3059 12.545 22.3221 12.9281 22.2835 13.3083C22.2741 13.4102 22.269 13.5125 22.2681 13.6149C22.2504 14.9833 22.2334 16.3524 22.2704 17.7215C22.3028 18.9211 22.3676 20.12 22.4393 21.3189C22.4956 22.2652 22.5766 23.2114 22.6599 24.1561C22.7416 25.0821 22.8411 26.0066 22.9344 26.9326C22.9522 27.1088 22.9684 27.1252 23.1743 27.0983C23.58 27.039 23.9894 27.0061 24.3997 27C25.6745 26.997 26.9285 27.1672 28.1686 27.4529C29.2537 27.7033 30.3095 28.037 31.3213 28.5033C31.8226 28.7343 32.3023 29.0012 32.7395 29.3401C32.8884 29.4541 33.021 29.5853 33.1467 29.7225V29.7225ZM60.3116 29.4976C60.8052 29.9182 60.9849 30.4333 60.8445 31.0706C60.7281 31.5962 60.4643 32.0378 60.1127 32.433C59.5481 33.068 58.8625 33.5509 58.1206 33.9543C56.6661 34.746 55.1168 35.2604 53.488 35.5573C52.599 35.7213 51.7023 35.8429 50.8011 35.9217C50.2906 35.9644 49.7777 36.0177 49.2047 35.9832H48.5353C48.405 35.9832 48.331 35.9434 48.3202 35.7927C48.2708 35.1344 48.2137 34.4769 48.1528 33.8193C48.088 33.125 48.0163 32.4307 47.9485 31.7364C47.8868 31.0983 47.8297 30.4588 47.7626 29.8207C47.7009 29.2194 47.6299 28.6196 47.5628 28.019C47.5004 27.4552 47.4402 26.8913 47.3716 26.3282C47.2891 25.6459 47.2019 24.9636 47.1148 24.2813C47.033 23.6448 46.9521 23.0089 46.8649 22.3731C46.7722 21.6917 46.6746 21.0108 46.5719 20.3307C46.4346 19.4482 46.2873 18.5687 46.1423 17.6877C45.9401 16.4402 45.7061 15.1976 45.4405 13.9613C45.4297 13.9066 45.4243 13.8504 45.4073 13.7971C45.3672 13.6772 45.4058 13.6134 45.5269 13.5669C46.7122 13.1163 47.8598 12.5727 49.0559 12.1439C49.2125 12.0869 49.3706 12.0231 49.5394 12.0066C49.6914 11.9916 49.7299 12.0156 49.7153 12.1731C49.6351 13.0271 49.6813 13.8856 49.6397 14.7403C49.6058 15.4376 49.6096 16.1372 49.6459 16.8352C49.6544 17.0122 49.6613 17.1899 49.6598 17.3661C49.6505 18.2043 49.696 19.0418 49.74 19.8786C49.7963 20.9845 49.8788 22.0882 49.9628 23.1926C50.0238 23.9897 50.1032 24.7852 50.1803 25.5814C50.2212 26.0171 50.2652 26.4519 50.3207 26.8853C50.3508 27.1245 50.3631 27.1267 50.6045 27.0953C51.0302 27.039 51.4567 26.9933 51.887 26.9993C53.397 27.018 54.877 27.2497 56.3291 27.6523C57.3124 27.9238 58.2695 28.2627 59.1733 28.7373C59.5811 28.9481 59.963 29.2031 60.3116 29.4976V29.4976ZM25.4416 33.6281C26 33.3687 28.7108 31.309 28.9259 30.9731C27.6102 30.422 26.2899 29.9099 24.8702 29.4908L25.4416 33.6281ZM56.2312 31.1081C56.3006 31.0354 56.2929 30.9791 56.1988 30.9386C56.0114 30.8554 55.8255 30.7669 55.6358 30.6912C54.6232 30.2886 53.606 29.8987 52.5626 29.5808C52.4716 29.5538 52.3782 29.4923 52.2618 29.5448L52.824 33.6101C52.9073 33.6281 52.9397 33.5906 52.9767 33.5651C53.9245 32.8888 54.8785 32.2208 55.7885 31.4935C55.942 31.372 56.0939 31.2498 56.2312 31.1081V31.1081Z" fill="#00A1D6"
                />
              </svg>
              </button>}

            {video.source.youtube &&
              <button onClick={() => switchVideo("youtube")} onKeyDown={() => switchVideo("youtube")}><svg className={style.platform} width="90" height="36" viewBox="0 0 119 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.9928 16.3484C40.6406 15.0304 39.6026 13.9925 38.2846 13.6402C35.8955 13 26.3164 13 26.3164 13C26.3164 13 16.7373 13 14.3481 13.6402C13.0304 13.9925 11.9922 15.0304 11.64 16.3484C11 18.7373 11 23.7216 11 23.7216C11 23.7216 11 28.706 11.64 31.0946C11.9922 32.4126 13.0304 33.4508 14.3481 33.803C16.7373 34.443 26.3164 34.443 26.3164 34.443C26.3164 34.443 35.8955 34.443 38.2846 33.803C39.6026 33.4508 40.6406 32.4126 40.9928 31.0946C41.6331 28.706 41.6331 23.7216 41.6331 23.7216C41.6331 23.7216 41.6331 18.7373 40.9928 16.3484V16.3484Z" fill="#ED1F24" />
                <path d="M23.2524 28.317L31.2109 23.722L23.2524 19.127V28.317V28.317Z" fill="white" />
                <path className={style.nightName} fill-rule="evenodd" clip-rule="evenodd" d="M94.5372 29.3971C94.6174 28.8424 94.658 28.0756 94.658 27.097V25.3662C94.658 24.3147 94.625 23.5043 94.5592 22.9349C94.4934 22.3651 94.3764 21.9599 94.2087 21.7188C94.0405 21.478 93.8035 21.3574 93.4966 21.3574C93.2043 21.3574 92.9346 21.4747 92.6862 21.7079C92.4378 21.9417 92.2626 22.2413 92.1605 22.6061V30.2296C92.2921 30.4633 92.4633 30.6385 92.6754 30.7553C92.8869 30.8722 93.1169 30.9305 93.3655 30.9305C93.6862 30.9305 93.9422 30.8138 94.1321 30.58C94.3219 30.3468 94.4571 29.9524 94.5372 29.3971ZM96.5416 19.7792C96.9504 20.1592 97.2462 20.7727 97.429 21.6195C97.6113 22.4667 97.7028 23.6425 97.7028 25.1466V27.2712C97.7028 29.2723 97.4617 30.7434 96.9799 31.6855C96.4977 32.6273 95.7456 33.0985 94.7236 33.0985C94.154 33.0985 93.6353 32.9669 93.1681 32.7042C92.7006 32.4412 92.3501 32.0834 92.1166 31.6308H92.051L91.7441 32.9011H89.2471V13.8428H92.1605L92.1602 20.9184H92.1824C92.4452 20.4074 92.8178 19.9948 93.2997 19.6809C93.7816 19.367 94.3 19.2099 94.855 19.2099C95.5703 19.2099 96.1327 19.3997 96.5416 19.7792ZM44.6631 14.5215L48.1025 26.9424V32.9013H51.0817V26.9424L54.5647 14.5215H51.5636L50.3149 20.1733C49.9644 21.8239 49.738 22.9992 49.6358 23.7002H49.5481C49.4021 22.7221 49.1759 21.5392 48.869 20.1513L47.6643 14.5215H44.6631ZM58.8591 30.4039C59.0268 29.9662 59.1111 29.2505 59.1111 28.2573V24.073C59.1111 23.1093 59.0268 22.4048 58.8591 21.9592C58.6912 21.5139 58.3954 21.291 57.9721 21.291C57.5631 21.291 57.2744 21.5139 57.1067 21.9592C56.9387 22.4048 56.8548 23.1093 56.8548 24.073V28.2573C56.8548 29.2505 56.935 29.9662 57.0958 30.4039C57.2562 30.8421 57.5482 31.061 57.9721 31.061C58.3954 31.061 58.6912 30.8421 58.8591 30.4039ZM55.4639 32.5071C54.8574 32.0986 54.4265 31.4629 54.1713 30.601C53.9157 29.7397 53.7881 28.5931 53.7881 27.1619V25.2123C53.7881 23.7664 53.9338 22.6052 54.226 21.7292C54.518 20.853 54.9742 20.2141 55.5952 19.8123C56.2158 19.4109 57.03 19.21 58.0379 19.21C59.0309 19.21 59.8267 19.4144 60.4255 19.8235C61.0241 20.2322 61.4624 20.8714 61.74 21.7401C62.0172 22.6093 62.1561 23.7664 62.1561 25.2123V27.1619C62.1561 28.5931 62.0209 29.7435 61.7509 30.6122C61.4805 31.4813 61.0423 32.1165 60.4364 32.5179C59.8302 32.9196 59.009 33.1203 57.9721 33.1203C56.9057 33.1203 56.0696 32.9158 55.4639 32.5071ZM102.374 21.5428C102.221 21.7329 102.119 22.043 102.068 22.4737C102.016 22.9047 101.991 23.5583 101.991 24.4345V25.3985H104.204V24.4345C104.204 23.5729 104.174 22.9193 104.116 22.4737C104.058 22.0284 103.952 21.7147 103.799 21.5319C103.645 21.3494 103.408 21.2581 103.087 21.2581C102.765 21.2581 102.528 21.3531 102.374 21.5428ZM101.991 27.1948V27.8739C101.991 28.7358 102.016 29.3818 102.068 29.8125C102.119 30.2434 102.224 30.5576 102.386 30.7547C102.546 30.9517 102.794 31.0505 103.13 31.0505C103.583 31.0505 103.893 30.875 104.061 30.5245C104.229 30.1741 104.32 29.5901 104.335 28.7721L106.942 28.9254C106.957 29.0426 106.964 29.203 106.964 29.4073C106.964 30.6488 106.625 31.5763 105.945 32.1895C105.266 32.8028 104.306 33.1096 103.065 33.1096C101.575 33.1096 100.531 32.6424 99.9321 31.7074C99.333 30.7731 99.0337 29.3273 99.0337 27.3701V25.0258C99.0337 23.0106 99.3441 21.5395 99.9649 20.6118C100.585 19.6844 101.648 19.2207 103.152 19.2207C104.189 19.2207 104.985 19.4105 105.54 19.7903C106.095 20.1703 106.486 20.7616 106.712 21.5647C106.938 22.3681 107.052 23.4781 107.052 24.8944V27.1948H101.991ZM71.9171 19.4736V32.9021H69.5512L69.2882 31.2593H69.2226C68.5798 32.5007 67.6159 33.1212 66.3309 33.1212C65.44 33.1212 64.7829 32.8292 64.3593 32.245C63.9357 31.661 63.7241 30.748 63.7241 29.5069V19.4736H66.7472V29.3313C66.7472 29.9305 66.813 30.3576 66.9444 30.6128C67.0757 30.8688 67.2949 30.9963 67.6015 30.9963C67.8645 30.9963 68.1164 30.9162 68.3572 30.7553C68.5983 30.5947 68.7771 30.3904 68.894 30.142V19.4736H71.9171ZM87.4235 32.9021V19.4736H84.4004V30.142C84.2834 30.3904 84.1046 30.5947 83.8636 30.7553C83.6228 30.9162 83.3709 30.9963 83.1079 30.9963C82.8013 30.9963 82.5821 30.8688 82.4505 30.6128C82.3191 30.3576 82.2536 29.9305 82.2536 29.3313V19.4736H79.2305V29.5069C79.2305 30.748 79.442 31.661 79.8657 32.245C80.2893 32.8292 80.9464 33.1212 81.8372 33.1212C83.1223 33.1212 84.086 32.5007 84.7292 31.2593H84.7945L85.0575 32.9021H87.4235ZM80.1314 16.9533H77.1303V32.9011H74.173V16.9533H71.1719V14.5215H80.1314V16.9533Z" fill="#272727" />
              </svg>
              </button>}

            {video.source.xigua &&
              <button onClick={() => switchVideo("xigua")} onKeyDown={() => switchVideo("xigua")}><svg className={style.platform} width="88" height="36" viewBox="0 0 118 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.69288 25.1618C6.66699 24.9029 6.66699 24.6181 6.66699 24.3333C6.66699 16.9805 12.6475 11 20.0003 11C27.353 11 33.3336 16.9805 33.3336 24.3333C33.3336 31.686 27.353 37.6667 20.0003 37.6667C19.9744 37.6667 19.4825 37.6667 19.4566 37.6667C17.8514 37.6149 16.531 36.4757 16.2203 34.9482C15.6249 31.4789 12.8546 28.7347 9.35954 28.1651C7.88382 27.8285 6.77055 26.5599 6.69288 25.0065C6.69288 24.9547 6.69288 24.903 6.69288 24.8253" fill="url(#paint0_linear_193_1722)" />
                <path d="M19.0683 29.382C21.4502 28.8125 23.5472 27.5697 25.2042 25.861C26.0068 25.0325 26.0068 23.6345 25.2042 22.806C23.5472 21.1231 21.4243 19.8804 19.0683 19.2849C17.9032 19.0002 16.7382 19.6733 16.4016 20.8125C16.0909 21.9257 15.9097 23.1167 15.9097 24.3335C15.9097 25.5503 16.0909 26.7413 16.4016 27.8804C16.7382 28.9937 17.9291 29.6668 19.0683 29.382Z" fill="white" />
                <path className={style.nightName} fill-rule="evenodd" clip-rule="evenodd" d="M81.9029 27.077C81.7735 26.3262 81.4369 23.9443 81.3592 23.2711C81.3592 23.1676 81.2557 23.0899 81.1521 23.0899H79.9871C80.0155 23.0238 80.2196 22.6164 80.4787 22.0993L80.4792 22.0984L80.4798 22.0971L80.4807 22.0955C80.9316 21.1955 81.548 19.9654 81.6958 19.6207C81.8512 19.2841 82.0065 18.9216 82.1359 18.5851C82.2136 18.3779 82.0583 18.1708 81.8512 18.1708H80.1942L80.246 17.7566L80.4013 16.3844C80.4272 16.255 80.3236 16.1514 80.1683 16.1514H79.1586C79.0292 16.1514 78.8997 16.255 78.8738 16.3844L78.6926 18.1967H76.4919C76.3625 18.1967 76.233 18.3003 76.2071 18.4297L76.1295 19.4912C76.1036 19.6207 76.2071 19.7242 76.3625 19.7242H79.9612C79.4434 21.0187 76.0777 26.4815 75.1974 27.7501C75.1198 27.8796 75.1974 28.0349 75.3528 28.0349H76.6473C76.8026 28.0349 76.958 27.9572 77.0356 27.8278C77.1392 27.6983 78.123 26.0155 78.2783 25.7048L77.5534 32.2291C77.5275 32.3585 77.6311 32.4621 77.7864 32.4621H78.8738C79.0033 32.4621 79.1327 32.3585 79.1586 32.2291L79.9353 23.8925C80.0648 24.9281 80.2978 26.611 80.3754 27.1288C80.4013 27.2323 80.479 27.2841 80.5825 27.2841H81.7217C81.8253 27.31 81.9288 27.1805 81.9029 27.077ZM97.514 22.7801H95.2616C95.0027 22.7801 94.7956 22.573 94.8215 22.34L94.8474 22.0811L95.417 17.0067C95.4428 16.8772 95.5723 16.7736 95.7017 16.7736H96.6597C96.815 16.7736 96.9186 16.8772 96.8927 17.0067L96.4526 21.2267C96.4267 21.3044 96.4785 21.3562 96.5561 21.3562H97.8506L98.3684 16.4371C98.3943 16.3076 98.5237 16.2041 98.6532 16.2041H99.6629C99.8183 16.2041 99.9218 16.3076 99.8959 16.4371L99.7406 17.8092H101.657C101.735 17.8092 101.786 17.861 101.786 17.9387L101.657 19.1296C101.657 19.2073 101.579 19.2591 101.501 19.2591H99.5852L99.3781 21.3303H101.864C101.942 21.3303 101.993 21.3821 101.993 21.4597L101.864 22.6507C101.864 22.7283 101.786 22.7801 101.709 22.7801H99.0415L98.5496 27.518C98.5238 27.6992 98.3684 27.8287 98.1872 27.8287H97.281C97.1257 27.8287 96.9962 27.6992 97.0221 27.5439L97.514 22.7801ZM41.4631 16.3076H56.6605C56.79 16.3076 56.8676 16.4111 56.8676 16.4888L56.7382 17.6021C56.7382 17.7056 56.6346 17.8092 56.5052 17.8092H51.4566L51.1977 20.1393H55.6508C55.8838 20.1393 56.0392 20.3205 56.0133 20.5276L54.7964 32.0228C54.7705 32.2558 54.5634 32.437 54.3045 32.437H40.4793C40.2204 32.437 40.0391 32.2558 40.065 32.0228L41.3336 20.5276C41.3595 20.3205 41.5408 20.1652 41.7479 20.1652H46.1751C46.2116 19.8915 46.351 19.0132 46.4482 18.4008L46.4484 18.3994L46.45 18.3891C46.4899 18.1379 46.5224 17.9329 46.5375 17.8351H41.3336C41.1783 17.8351 41.0747 17.7315 41.1006 17.6021L41.2042 16.5406C41.2042 16.4111 41.3336 16.3076 41.4631 16.3076ZM49.9291 17.8351H48.0392C48.0241 17.9327 47.9917 18.1371 47.9519 18.3875L47.9518 18.3882L47.9514 18.3906C47.8541 19.0035 47.7134 19.8899 47.6767 20.1652H49.6702L49.9291 17.8351ZM54.3304 21.8998C54.3304 21.7962 54.2527 21.6927 54.1233 21.6927L51.0942 21.6409L50.5764 26.4564H52.6476C52.7511 26.4564 52.8029 26.5341 52.8029 26.6377L52.6735 27.8286C52.6476 27.9322 52.5699 28.0098 52.4663 28.0098H49.256C49.023 28.0098 48.8676 27.8545 48.8935 27.6474L49.5149 21.6927H47.3401C47.2918 21.9051 47.24 22.1391 47.1872 22.3772L47.187 22.3779L47.1866 22.3796L47.1866 22.3797C47.098 22.7794 47.0068 23.1907 46.9259 23.5309C46.893 23.6691 46.8567 23.8273 46.8184 23.9945C46.706 24.4854 46.5757 25.0539 46.4599 25.4208L46.4581 25.4265L46.458 25.4267C46.3032 25.9167 46.1485 26.4065 45.9938 26.8448C45.9531 26.9505 45.9151 27.0536 45.8779 27.1542L45.8778 27.1544L45.8778 27.1545L45.8778 27.1546C45.7967 27.3742 45.7201 27.5816 45.6314 27.7768C45.5796 27.9063 45.4243 28.0098 45.2689 28.0098H44.0521C43.9485 28.0098 43.8709 27.9063 43.9226 27.8027C44.2592 27.0778 44.5699 26.2493 44.8806 25.3173C45.1913 24.2817 45.6055 22.7542 45.8385 21.6927H42.9129C42.8094 21.6927 42.6799 21.7962 42.6799 21.8998L41.7479 30.7283C41.722 30.8318 41.8256 30.9095 41.9291 30.9095H53.1654C53.2948 30.9095 53.3984 30.8318 53.3984 30.7283L54.3304 21.8998ZM94.4075 27.9055H95.5466C95.6502 27.9055 95.7279 27.8278 95.7537 27.7501C95.8573 27.1029 96.168 25.1094 96.2457 24.3327C96.2457 24.2032 96.1421 24.0996 96.0126 24.0996H94.9253C94.8217 24.0996 94.744 24.1773 94.7181 24.2809C94.5532 25.7442 94.4047 26.5512 94.2857 27.1983L94.2857 27.1987C94.2552 27.3644 94.2266 27.5195 94.2003 27.6725C94.1745 27.776 94.278 27.9055 94.4075 27.9055ZM107.327 28.1643C107.508 28.7079 107.715 29.1999 108.104 29.9248C108.596 30.8568 109.191 31.763 109.579 32.2549C109.657 32.3584 109.553 32.5397 109.424 32.5397H108.259C108.052 32.5397 107.845 32.4361 107.741 32.2808C107.731 32.2642 107.721 32.247 107.71 32.2291C107.686 32.1899 107.659 32.1472 107.63 32.0996C107.46 31.8277 107.191 31.397 106.757 30.572C106.498 30.0542 106.162 29.3552 105.929 28.8374C105.618 29.4846 105.074 30.3131 104.608 30.8827C104.22 31.3487 103.728 31.8147 103.288 32.229C103.107 32.4102 102.874 32.5138 102.615 32.5138H101.243C101.087 32.5138 101.01 32.3067 101.139 32.2031C101.498 31.9046 101.779 31.6367 102.079 31.3524L102.079 31.3522C102.169 31.2666 102.261 31.1796 102.356 31.0898C102.874 30.572 103.392 30.0024 103.754 29.4846C104.117 28.9927 104.479 28.4749 104.712 27.9312C104.945 27.3876 105.049 26.8698 105.152 26.2225L105.566 22.3131C105.566 22.1837 105.696 22.0801 105.825 22.0801H106.861C106.99 22.0801 107.094 22.1837 107.068 22.3131L106.68 26.2225C106.602 26.818 106.447 27.4134 106.24 27.9571H107.042C107.172 27.9571 107.275 28.0348 107.327 28.1643ZM110.33 16.3076H103.34C103.21 16.3076 103.081 16.4111 103.055 16.5406L102.951 17.5762C102.926 17.7056 103.029 17.8092 103.184 17.8092H105.877L105.359 19.4144H103.392C103.184 19.4144 102.977 19.5697 102.951 19.7768L102.123 27.5697C102.097 27.6992 102.201 27.8027 102.356 27.8027H103.366C103.495 27.8027 103.625 27.6992 103.65 27.5697L104.35 20.8642C104.35 20.8383 104.375 20.7865 104.427 20.7865H108.388C108.414 20.7865 108.466 20.8124 108.44 20.8642L107.741 27.5697C107.715 27.6992 107.819 27.8027 107.974 27.8027H108.984C109.113 27.8027 109.243 27.6733 109.269 27.5438L110.097 19.7509C110.123 19.5438 109.968 19.3885 109.735 19.3885H106.835L107.327 17.7833H110.123C110.252 17.7833 110.382 17.6797 110.408 17.5503L110.511 16.5147C110.563 16.437 110.46 16.3076 110.33 16.3076ZM100.466 24.126H101.502C101.631 24.126 101.709 24.2555 101.683 24.359C101.217 28.2166 100.181 30.8315 93.942 32.4885C93.9161 32.5144 93.8643 32.5144 93.8125 32.4885C93.7349 32.4626 93.6831 32.359 93.6831 32.2555L93.8125 31.1422C93.8125 31.0128 93.942 30.8833 94.0714 30.8574C94.0949 30.8495 94.1208 30.8393 94.149 30.8282C94.2141 30.8025 94.2918 30.7719 94.3821 30.7539C97.5925 29.9513 98.7834 28.6568 99.586 26.948C99.9374 26.2011 100.084 25.1932 100.168 24.6202L100.168 24.6196L100.168 24.6161C100.183 24.5156 100.196 24.4286 100.207 24.359C100.233 24.2296 100.337 24.126 100.466 24.126ZM84.1296 16.333H91.56C91.7671 16.333 91.9484 16.5142 91.9484 16.7213L90.8351 27.0773C90.8092 27.2068 90.6798 27.3103 90.5503 27.3103H89.5406C89.3853 27.3103 89.2817 27.2068 89.3076 27.0773L90.2914 17.99C90.2914 17.9382 90.2396 17.8864 90.1879 17.8864H85.2429C85.1652 17.8864 85.1134 17.9382 85.1134 17.99L84.1555 27.0773C84.1296 27.2068 84.0002 27.3103 83.8707 27.3103H82.8351C82.6798 27.3103 82.5762 27.2068 82.6021 27.0773L83.6895 16.7213C83.7154 16.5142 83.8966 16.333 84.1296 16.333ZM91.042 30.961H88.0906C88.0388 30.961 88.0129 30.9351 88.0129 30.8833L88.453 26.7668C88.4789 26.5338 88.2977 26.3267 88.0647 26.3267H87.4174C87.5728 25.7312 87.7022 25.0581 87.7799 24.2814L88.2718 19.7247C88.2977 19.5953 88.1941 19.4658 88.0388 19.4658H86.9773C86.8478 19.4658 86.7184 19.5694 86.7184 19.6988L86.2265 24.2555C86.097 25.3687 85.864 26.4561 85.3721 27.3882C84.3883 29.304 82.7831 30.8315 81.0485 32.2037C80.9449 32.3072 80.9708 32.4626 81.1262 32.4626H82.7313C83.0161 32.4626 83.3527 32.359 83.5857 32.1519C83.8187 31.9448 84.9579 30.8315 85.4498 30.1584C86.0452 29.3558 86.4595 28.6568 86.7961 27.9577L86.3818 31.893C86.3559 32.2037 86.5889 32.4885 86.8996 32.4885H90.8867C91.0161 32.4885 91.1456 32.3849 91.1715 32.2296L91.275 31.194C91.275 31.0645 91.1715 30.961 91.042 30.961ZM61.4758 16.7474L73.9806 16.2296C74.0842 16.2037 74.1877 16.3072 74.1101 16.4626L74.0065 17.5758C74.0065 17.6794 73.9029 17.783 73.7994 17.783L72.479 17.8606C72.4132 17.9263 72.4217 18.3444 72.4258 18.5498C72.4266 18.5871 72.4272 18.6174 72.4272 18.6373C72.414 18.7697 72.4075 18.9089 72.4009 19.0513C72.3945 19.1875 72.3881 19.3266 72.3754 19.4658C72.3624 19.7512 72.3495 20.03 72.3365 20.3089C72.3236 20.5867 72.3107 20.8644 72.2978 21.1486C72.2719 22.2619 72.2719 23.4011 72.2978 24.5143C72.3754 26.9998 72.6343 29.4852 73.178 31.9448C73.2557 32.2296 73.1521 32.5402 72.8156 32.5402H71.9871C71.78 32.5402 71.5728 32.3849 71.547 32.2037C70.7185 27.7506 70.589 23.2457 70.9256 18.715C70.9256 18.4302 70.9515 18.1713 70.9774 17.9124L67.1198 18.0677L66.4207 18.0936C65.9288 22.6503 64.7379 28.4237 64.1165 30.8833C64.1165 30.9351 64.1424 30.9868 64.1942 30.9868H67.6117C67.6635 30.9868 67.7152 30.9092 67.7152 30.8574L67.3787 25.8606C67.3787 25.7053 67.4822 25.5758 67.6376 25.5758H68.6732C68.8026 25.5758 68.9321 25.7053 68.9321 25.8347L69.3722 32.1001C69.3722 32.3331 69.2169 32.5143 68.9838 32.5143H62.7961C62.4337 32.5143 62.1748 32.1519 62.3042 31.8153L62.3819 31.5823C62.4078 31.5046 64.2719 23.6082 64.8932 18.1713L62.2266 18.2749L62.0712 19.5435C61.9936 20.4237 61.8382 21.5888 61.657 22.6503C61.5016 23.7118 61.3204 24.7991 61.0615 25.9124C60.8026 27.0257 60.4919 28.0095 60.1295 29.1487C59.7929 30.1843 59.4046 31.2457 58.9903 32.2037C58.9127 32.3849 58.6538 32.5143 58.4466 32.5143H57.8253C57.4887 32.5143 57.2816 32.2296 57.411 31.9448C57.7994 31.1163 58.1618 30.2101 58.4725 29.304C58.504 29.2115 58.5352 29.1202 58.5661 29.03C58.9152 28.0081 59.2205 27.1144 59.4822 26.0677C59.767 24.9286 60 23.8153 60.2072 22.7279C60.4143 21.6406 60.5696 20.4237 60.6732 19.5176L60.9062 17.2652C60.9321 16.9804 61.191 16.7732 61.4758 16.7474Z" fill="black" />
                <defs>
                  <linearGradient id="paint0_linear_193_1722" x1="20.0014" y1="11" x2="20.0014" y2="37.669" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FA5050" />
                    <stop offset="0.9949" stop-color="#FB0414" />
                  </linearGradient>
                </defs>
              </svg>
              </button>}

          </div>
        </div>

        {/* 评论 */}
        <TalkyardCommentsIframe />
      </main>
    </Layout>
  )
}

export function Head({ data }) {
  return (
    <>
      <title>{data.allStrapiVideo.nodes[0].basic.title} | 可可托海没有海</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="设计师、开发者李大毛的个人网站" />
    </>
  )
}

export const videoQuery = graphql`
        query VideoPlayerById($strapi_id: Int) {
            allStrapiVideo(filter: {strapi_id: {eq: $strapi_id }}) {
                nodes {
                  slug
                  source {
                    bilibili
                    youtube
                    xigua
                  }
                  basic {
                    date
                    description
                    isTop
                    title
                  }
                  cover {
                    localFile {
                    childImageSharp {
                        gatsbyImageData(width: 840, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
                    }
                    }
                  }
                }
            }
        }`
