import React from "react";
import { Link } from "gatsby";
import * as style from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <Link to="/">
        <svg className={style.logoFull} width="190" height="80" viewBox="0 0 190 80">
          <path
            d="M28.5696 59.029L29.5399 55.7392C30.0414 54.0385 29.9242 52.2151 29.2088 50.5927C28.3016 48.535 28.3657 46.1788 29.3835 44.1735L31.2696 40.4575L28.5696 41.0979L15.2283 50.7038C14.4871 51.1841 13.593 48.9427 13.7989 47.822C14.593 43.4993 20.4695 38.6964 20.6284 36.9353C20.7554 35.5264 20.2578 34.0001 19.9931 33.4131L15.3502 35.82C14.756 36.128 14.0771 36.2323 13.4179 36.1167C11.6962 35.8149 9.92395 36.0121 8.31063 36.685L6.17532 37.5757C5.85767 39.9772 6.39768 46.2531 11.0989 52.7851C15.8001 59.3172 24.7049 59.6694 28.5696 59.029Z"
            fill="#B23D2B"
            fill-opacity="0.24"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.1408 50.5234C36.853 55.0815 31.4857 58.0501 25.4225 58.0501C15.4187 58.0501 7.30894 49.9688 7.30894 40.0001C7.30894 39.3708 7.34126 38.7491 7.40432 38.1364C7.74725 37.9193 8.13103 37.6899 8.52298 37.4772C9.35631 37.0251 10.1053 36.717 10.5658 36.6711C11.6797 36.5601 13.3592 36.9139 14.0819 37.1196L14.3713 37.202L14.6429 37.0726L19.6713 34.6761C19.7764 34.9526 19.8664 35.3045 19.9047 35.7018C19.9732 36.4127 19.8615 37.1284 19.5108 37.672C19.0999 38.3089 18.4187 39.2238 17.6386 40.2716L17.6386 40.2716L17.6385 40.2717L17.6385 40.2718L17.6383 40.2719C17.0812 41.0202 16.4737 41.8361 15.8781 42.667C15.1789 43.6425 14.5069 44.6254 13.997 45.4929C13.742 45.9266 13.52 46.3441 13.3543 46.7263C13.1935 47.097 13.0622 47.4866 13.0317 47.851C12.8781 49.6882 13.8561 50.9494 14.459 51.4001L14.9248 51.7482L15.3982 51.4104C19.7086 48.3348 28.5091 42.079 29.498 41.4631C29.8136 41.2665 30.2062 41.2073 30.6194 41.2438C30.9606 41.274 31.2676 41.3661 31.4675 41.4483L40.1408 50.5234ZM41.033 49.1611L32.5123 40.2458L32.4165 40.1455L32.2923 40.0837C31.945 39.9106 31.3881 39.7223 30.76 39.6667C30.1298 39.6109 29.3573 39.6836 28.6559 40.1204C28.5532 40.1844 28.3749 40.303 28.1328 40.4677L22.7182 33.0488C22.2225 32.3696 21.311 32.1396 20.5506 32.502L14.2225 35.5179C13.3349 35.2924 11.6765 34.9692 10.4077 35.0957C9.59708 35.1764 8.59824 35.6336 7.76322 36.0867C7.75283 36.0923 7.74245 36.0979 7.73208 36.1036C9.51971 28.0079 16.7612 21.9501 25.4225 21.9501C35.4263 21.9501 43.5361 30.0313 43.5361 40.0001C43.5361 43.3441 42.6235 46.4757 41.033 49.1611ZM45.7605 40.0001C45.7605 51.193 36.6549 60.2667 25.4225 60.2667C14.1901 60.2667 5.08447 51.193 5.08447 40.0001C5.08447 28.8071 14.1901 19.7334 25.4225 19.7334C36.6549 19.7334 45.7605 28.8071 45.7605 40.0001ZM21.4332 33.9801L26.827 41.3706C23.9228 43.3964 18.4112 47.3147 15.0436 49.7162C14.7952 49.3428 14.5508 48.7522 14.6152 47.9825C14.6244 47.8719 14.6769 47.6677 14.8128 47.3544C14.9437 47.0526 15.1313 46.6957 15.368 46.2932C15.8411 45.4883 16.48 44.5514 17.1711 43.5873C17.7165 42.8264 18.3025 42.0386 18.8551 41.2956C19.6712 40.1984 20.4147 39.1989 20.8474 38.5282C21.45 37.594 21.5767 36.4888 21.4863 35.5505C21.4333 35.0004 21.3007 34.4574 21.1081 33.9914L21.2362 33.9304C21.3053 33.8974 21.3882 33.9183 21.4332 33.9801Z"
            fill="#B23D2B"
          />
          <path
            d="M70.6919 47.6348C70.7789 47.5482 70.918 47.4444 71.1267 47.3233C71.5964 47.0983 72.0834 46.6657 72.6227 46.0254C73.1619 45.3851 73.4228 44.3122 73.4402 42.824V33.0467L75.0231 32.9082C75.284 32.8909 75.4927 32.7871 75.6667 32.5621L75.6841 32.5102L75.1101 32.1641L74.9361 32.3372C74.8144 32.4583 74.6578 32.5275 74.4665 32.5448L60.7771 33.5485L61.1598 34.5695L61.7338 33.9292L70.3962 33.2717V44.243L67.7522 44.5372L70.6919 47.6348ZM64.3777 41.6992L66.0824 41.4742V41.9068L67.126 43.2566L68.8481 41.6126V37.321L69.6308 36.3865L67.0043 35.504L66.3259 36.4038C66.2389 36.4904 66.152 36.525 66.0476 36.5423L64.4299 36.698L61.9425 35.8501V42.2529L62.847 43.3778L64.3777 41.6992ZM64.4299 37.1307L66.0824 36.9403V41.0589L64.4299 41.2492V37.1307Z"
            fill="#42231B"
          />
          <path
            d="M88.0863 47.6348C88.1732 47.5482 88.3124 47.4444 88.5211 47.3233C88.9908 47.0983 89.4778 46.6657 90.017 46.0254C90.5563 45.3851 90.8172 44.3122 90.8346 42.824V33.0467L92.4174 32.9082C92.6784 32.8909 92.8871 32.7871 93.061 32.5621L93.0784 32.5102L92.5044 32.1641L92.3305 32.3372C92.2087 32.4583 92.0522 32.5275 91.8608 32.5448L78.1715 33.5485L78.5541 34.5695L79.1282 33.9292L87.7905 33.2717V44.243L85.1466 44.5372L88.0863 47.6348ZM81.7721 41.6992L83.4767 41.4742V41.9068L84.5204 43.2566L86.2425 41.6126V37.321L87.0252 36.3865L84.3986 35.504L83.7203 36.4038C83.6333 36.4904 83.5463 36.525 83.442 36.5423L81.8243 36.698L79.3369 35.8501V42.2529L80.2414 43.3778L81.7721 41.6992ZM81.8243 37.1307L83.4767 36.9403V41.0589L81.8243 41.2492V37.1307Z"
            fill="#42231B"
          />
          <path
            d="M108.681 47.1329C110.003 47.0118 110.821 46.1119 111.186 44.8141L110.247 44.5026L109.899 42.3221L109.064 44.5026L106.855 44.641V39.5707L110.316 39.0861C110.577 39.0342 110.786 38.9131 110.908 38.7054L110.942 38.6535L110.368 38.3247L110.194 38.5151C110.073 38.6362 109.934 38.7227 109.777 38.7573L106.855 39.1553V35.6251L107.429 35.0887L105.254 34.6214C106.629 34.4138 107.794 34.1196 108.768 33.7562L109.69 33.8773L108.281 31.4373L101.358 34.9156C102.28 34.8983 103.167 34.8464 104.037 34.7599V39.5187L100.958 39.9168L101.393 40.9378L101.915 40.2456L104.037 39.9514V44.866C104.037 45.5409 104.28 46.1119 104.75 46.5619C105.22 47.0291 105.794 47.2541 106.437 47.2541L108.681 47.1329ZM97.5488 47.3752C97.6184 47.2887 97.7575 47.2021 97.9489 47.0983C98.3489 46.908 98.7664 46.5273 99.236 45.9735C99.7057 45.4024 99.9492 44.4853 99.9666 43.1874V39.6918L102.263 37.9267L99.9666 38.7054V36.127L101.167 36.0231C101.41 36.0058 101.619 35.902 101.776 35.6943L101.81 35.6251L101.236 35.2963L101.08 35.4521C100.854 35.7117 100.401 35.6597 99.9666 35.7117V32.8044L100.523 32.3891L97.2009 31.6796L97.2879 32.4583V35.8847L95.3049 36.0058L95.6876 37.0268L96.2442 36.3865L97.2879 36.3173V39.588L94.8527 40.4013L96.2094 42.5471L97.2879 41.7338V44.416L95.4267 44.6756L97.5488 47.3752Z"
            fill="#42231B"
          />
          <path
            d="M124.301 47.6867C124.406 47.5829 124.597 47.479 124.858 47.3752C125.293 47.2195 125.745 46.9426 126.197 46.5099C126.65 46.0773 126.876 45.3505 126.876 44.3295V43.62L127.624 43.5681C127.954 43.5508 128.215 43.4124 128.372 43.1701L127.728 42.8067L127.519 42.997C127.345 43.1355 127.137 43.2047 126.876 43.2047V39.7264L127.937 39.6572C128.198 39.6399 128.406 39.5014 128.598 39.2592L128.006 38.9131L127.85 39.0688C127.589 39.3457 127.224 39.3111 126.876 39.3284V36.7673L127.624 35.8674L125.067 34.8291L124.267 35.729C124.18 35.8155 124.075 35.8501 123.953 35.8501L120.266 36.0924L118.961 35.7636C119.396 35.3136 119.779 34.8637 120.127 34.4138L127.415 33.8427C127.658 33.8254 127.867 33.7043 128.024 33.4966L128.076 33.462L127.502 33.0986L127.328 33.2717C127.206 33.4101 127.05 33.4793 126.858 33.4793L120.457 33.9465C120.683 33.6004 120.875 33.2717 121.031 32.9429L121.657 32.5621L118.857 31.42L115.935 38.1517C116.509 37.8229 117.083 37.4421 117.657 36.9749V39.8995L116.422 39.9687L116.822 41.007L117.396 40.3667L117.657 40.3494V44.3468L118.666 45.489L120.214 44.0526L124.006 43.8277V44.9525L121.431 45.2467L124.301 47.6867ZM120.266 40.1763L124.006 39.9168V43.3778L120.266 43.62V40.1763ZM120.266 36.5423L124.006 36.3173V39.5014L120.266 39.7264V36.5423ZM114.387 46.9599C115.134 45.5409 115.778 43.3777 116.3 40.4532L113.186 44.1738C113.117 44.2603 113.047 44.3122 112.995 44.3295C112.943 44.3468 112.717 44.3814 112.317 44.4334L114.387 46.9599ZM115.813 38.6362C114.978 37.719 113.778 37.0441 112.23 36.5942L113.986 40.3494L115.813 38.6362ZM116.961 34.2926C115.969 33.289 114.804 32.5968 113.465 32.216L115.1 35.8847L116.961 34.2926ZM123.519 41.6992C122.788 41.0589 121.901 40.6609 120.84 40.4878L122.11 43.1182L123.519 41.6992ZM123.519 37.9786C122.805 37.3383 121.918 36.9403 120.857 36.7846L122.11 39.3457L123.519 37.9786Z"
            fill="#42231B"
          />
          <path
            d="M133.294 47.6694C135.503 46.9599 137.538 45.9562 139.4 44.6583C140.826 45.8177 142.565 46.7522 144.601 47.4444L145.836 44.243C144.253 43.8969 142.792 43.4643 141.435 42.9624C142.496 41.9068 143.453 40.6609 144.27 39.2073L141.504 37.9613L140.861 39.1034L135.173 39.4668L135.573 40.4878L136.129 39.8302L136.582 39.8129C136.825 41.1108 137.295 42.2356 138.008 43.1874C136.704 44.7795 135.121 46.2677 133.294 47.6694ZM134.129 39.2592C136.356 38.4458 138.582 36.8192 138.582 33.6178V33.2717L140.252 33.1159V35.5213C140.165 37.5979 142.513 38.0824 143.261 38.2036H143.296L145.644 35.4002L143.087 35.6943V33.237L143.766 32.5448L141 31.6277L140.53 32.4064C140.374 32.5968 140.217 32.6833 140.061 32.6833L138.53 32.8563L135.851 31.9738V33.6351C135.851 35.7636 135.277 37.6325 134.129 39.2592ZM131.868 46.4753C132.338 45.662 132.842 44.6237 133.399 43.3951C133.973 42.1491 134.425 40.9724 134.755 39.8821L130.789 43.7238C130.633 43.8796 130.529 43.8969 130.337 43.8969L129.781 43.8796L131.868 46.4753ZM131.85 40.4705L133.625 38.5324C132.738 37.5806 131.503 36.923 129.954 36.5596L131.85 40.4705ZM132.685 36.2135L134.494 34.2234C133.712 33.4274 132.494 32.8044 130.842 32.3718L132.685 36.2135ZM139.104 41.7857C138.252 41.2492 137.591 40.5743 137.086 39.7783L140.6 39.536C140.13 40.2975 139.626 41.0416 139.104 41.7857Z"
            fill="#42231B"
          />
          <path
            d="M153.733 45.7485V42.3914L157.281 42.1491C157.542 42.1318 157.751 42.0107 157.907 41.8203L157.942 41.7511L157.351 41.405L157.177 41.578C157.055 41.6992 156.916 41.7684 156.724 41.7857L153.733 41.976V39.9168L157.281 39.6572C157.542 39.6572 157.768 39.536 157.942 39.2765L157.351 38.9131L157.177 39.0861C157.055 39.2246 156.916 39.2938 156.724 39.3111L153.733 39.4841V37.4941L158.603 37.1999V44.3814L156.15 44.6756L158.899 47.5136C158.986 47.4271 159.142 47.306 159.368 47.1848C159.821 46.9945 160.29 46.6138 160.795 46.0081C161.299 45.4197 161.577 44.416 161.595 42.9797V37.7882L162.238 36.9749L159.542 35.6943L159.003 36.525C158.847 36.6807 158.62 36.7673 158.359 36.7846L153.628 37.0441L153.263 36.9922C153.837 36.2135 154.376 35.3829 154.881 34.5176L162.221 33.9639C162.552 33.9119 162.76 33.7735 162.882 33.5485L162.308 33.2024L162.134 33.3928C162.012 33.4966 161.856 33.5658 161.664 33.5831L155.124 34.0677C155.455 33.462 155.75 32.839 156.029 32.1814L153.106 31.3335C152.776 32.3026 152.393 33.289 151.958 34.2926L148.514 34.5349L148.914 35.5732L149.471 34.9156L151.732 34.7426C150.671 37.2691 149.262 39.6918 147.523 42.028C148.827 41.2665 150.01 40.384 151.071 39.3803V46.6484L152.098 47.6348L153.733 45.7485Z"
            fill="#42231B"
          />
          <path
            d="M176.484 47.6867C176.589 47.5829 176.78 47.479 177.041 47.3752C177.476 47.2195 177.928 46.9426 178.38 46.5099C178.833 46.0773 179.059 45.3505 179.059 44.3295V43.62L179.807 43.5681C180.137 43.5508 180.398 43.4124 180.555 43.1701L179.911 42.8067L179.702 42.997C179.528 43.1355 179.32 43.2047 179.059 43.2047V39.7264L180.12 39.6572C180.381 39.6399 180.589 39.5014 180.781 39.2592L180.189 38.9131L180.033 39.0688C179.772 39.3457 179.407 39.3111 179.059 39.3284V36.7673L179.807 35.8674L177.25 34.8291L176.45 35.729C176.363 35.8155 176.258 35.8501 176.137 35.8501L172.449 36.0924L171.144 35.7636C171.579 35.3136 171.962 34.8637 172.31 34.4138L179.598 33.8427C179.842 33.8254 180.05 33.7043 180.207 33.4966L180.259 33.462L179.685 33.0986L179.511 33.2717C179.389 33.4101 179.233 33.4793 179.041 33.4793L172.64 33.9465C172.866 33.6004 173.058 33.2717 173.214 32.9429L173.84 32.5621L171.04 31.42L168.118 38.1517C168.692 37.8229 169.266 37.4421 169.84 36.9749V39.8995L168.605 39.9687L169.005 41.007L169.579 40.3667L169.84 40.3494V44.3468L170.849 45.489L172.397 44.0526L176.189 43.8277V44.9525L173.614 45.2467L176.484 47.6867ZM172.449 40.1763L176.189 39.9168V43.3778L172.449 43.62V40.1763ZM172.449 36.5423L176.189 36.3173V39.5014L172.449 39.7264V36.5423ZM166.57 46.9599C167.318 45.5409 167.961 43.3777 168.483 40.4532L165.369 44.1738C165.3 44.2603 165.23 44.3122 165.178 44.3295C165.126 44.3468 164.9 44.3814 164.5 44.4334L166.57 46.9599ZM167.996 38.6362C167.161 37.719 165.961 37.0441 164.413 36.5942L166.17 40.3494L167.996 38.6362ZM169.144 34.2926C168.153 33.289 166.987 32.5968 165.648 32.216L167.283 35.8847L169.144 34.2926ZM175.702 41.6992C174.971 41.0589 174.084 40.6609 173.023 40.4878L174.293 43.1182L175.702 41.6992ZM175.702 37.9786C174.988 37.3383 174.101 36.9403 173.04 36.7846L174.293 39.3457L175.702 37.9786Z"
            fill="#42231B"
          />
        </svg>
        <svg className={style.logoMini} width="36" height="36" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.5699 45.03L29.5401 41.7401C30.0417 40.0395 29.9244 38.2161 29.2091 36.5937C28.3018 34.536 28.3659 32.1798 29.3837 30.1745L31.2699 26.4584L28.5699 27.0988L15.2286 36.7048C14.4874 37.1851 13.5933 34.9437 13.7992 33.823C14.5933 29.5003 20.4698 24.6973 20.6286 22.9362C20.7557 21.5274 20.258 20.0011 19.9933 19.4141L15.3504 21.821C14.7563 22.129 14.0774 22.2333 13.4182 22.1177C11.6964 21.8158 9.9242 22.013 8.31087 22.686L6.17557 23.5766C5.85792 25.9781 6.39793 32.254 11.0991 38.7861C15.8003 45.3181 24.7051 45.6704 28.5699 45.03Z" fill="#B23D2B" fill-opacity="0.24" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1408 36.5234C36.853 41.0815 31.4857 44.0501 25.4225 44.0501C15.4187 44.0501 7.30894 35.9688 7.30894 26.0001C7.30894 25.3708 7.34126 24.7491 7.40432 24.1364C7.74725 23.9193 8.13103 23.6899 8.52298 23.4772C9.35631 23.0251 10.1053 22.717 10.5658 22.6711C11.6797 22.5601 13.3592 22.9139 14.0819 23.1196L14.3713 23.202L14.6429 23.0726L19.6713 20.6761C19.7764 20.9526 19.8664 21.3045 19.9047 21.7018C19.9732 22.4127 19.8615 23.1284 19.5108 23.672C19.0999 24.3089 18.4187 25.2238 17.6386 26.2716L17.6386 26.2716L17.6385 26.2717L17.6385 26.2718L17.6383 26.2719C17.0812 27.0202 16.4737 27.8361 15.8781 28.667C15.1789 29.6425 14.5069 30.6254 13.997 31.4929C13.742 31.9266 13.52 32.3441 13.3543 32.7263C13.1935 33.097 13.0622 33.4866 13.0317 33.851C12.8781 35.6882 13.8561 36.9494 14.459 37.4001L14.9248 37.7482L15.3982 37.4104C19.7086 34.3348 28.5091 28.079 29.498 27.4631C29.8136 27.2665 30.2062 27.2073 30.6194 27.2438C30.9606 27.274 31.2676 27.3661 31.4675 27.4483L40.1408 36.5234ZM41.033 35.1611L32.5123 26.2458L32.4165 26.1455L32.2923 26.0837C31.945 25.9106 31.3881 25.7223 30.76 25.6667C30.1298 25.6109 29.3573 25.6836 28.6559 26.1204C28.5532 26.1844 28.3749 26.303 28.1328 26.4677L22.7182 19.0488C22.2225 18.3696 21.311 18.1396 20.5506 18.502L14.2225 21.5179C13.3349 21.2924 11.6765 20.9692 10.4077 21.0957C9.59708 21.1764 8.59824 21.6336 7.76322 22.0867C7.75283 22.0923 7.74245 22.0979 7.73208 22.1036C9.51971 14.0079 16.7612 7.95007 25.4225 7.95007C35.4263 7.95007 43.5361 16.0313 43.5361 26.0001C43.5361 29.3441 42.6235 32.4757 41.033 35.1611ZM45.7605 26.0001C45.7605 37.193 36.6549 46.2667 25.4225 46.2667C14.1901 46.2667 5.08447 37.193 5.08447 26.0001C5.08447 14.8071 14.1901 5.7334 25.4225 5.7334C36.6549 5.7334 45.7605 14.8071 45.7605 26.0001ZM21.4332 19.9801L26.827 27.3706C23.9228 29.3964 18.4112 33.3147 15.0436 35.7162C14.7952 35.3428 14.5508 34.7522 14.6152 33.9825C14.6244 33.8719 14.6769 33.6677 14.8128 33.3544C14.9437 33.0526 15.1313 32.6957 15.368 32.2932C15.8411 31.4883 16.48 30.5514 17.1711 29.5873C17.7165 28.8264 18.3025 28.0386 18.8551 27.2956C19.6712 26.1984 20.4147 25.1989 20.8474 24.5282C21.45 23.594 21.5767 22.4888 21.4863 21.5505C21.4333 21.0004 21.3007 20.4574 21.1081 19.9914L21.2362 19.9304C21.3053 19.8974 21.3882 19.9183 21.4332 19.9801Z" fill="#B23D2B" />
        </svg>

      </Link>
      <ul className={style.connectList}>
        <li className={style.connectItem}>
          <Link to="/article">文章</Link>
        </li>
        <li className={style.connectItem}>
          <Link to="/album">摄影</Link>
        </li>
        <li className={style.connectItem}>
          <Link to="/video">视频</Link>
        </li>
      </ul>
      <div className={style.action}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path d="M19.025 20.05 13.25 14.3q-.75.625-1.725.975-.975.35-2 .35-2.575 0-4.35-1.775Q3.4 12.075 3.4 9.5q0-2.55 1.775-4.338 1.775-1.787 4.35-1.787 2.55 0 4.325 1.775 1.775 1.775 1.775 4.35 0 1.075-.35 2.05-.35.975-.95 1.7l5.775 5.775q.2.2.2.5t-.225.525q-.225.225-.537.225-.313 0-.513-.225Zm-9.5-5.925q1.925 0 3.263-1.35 1.337-1.35 1.337-3.275 0-1.925-1.337-3.275-1.338-1.35-3.263-1.35-1.95 0-3.287 1.35Q4.9 7.575 4.9 9.5q0 1.925 1.338 3.275 1.337 1.35 3.287 1.35Z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;