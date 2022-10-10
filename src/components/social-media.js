import React from "react";
import * as style from "./footer/index.module.css"

export default function SocialMedia () {
  return (
    <ul className={style.socialMedia}>
      <li>
        <a aria-label="微信公众号" href="http://mp.weixin.qq.com/mp/homepage?__biz=MzIxOTM1NzIzNw==&hid=1&sn=173a6a61a9cafb6ac2e7d36ee0efe411&scene=18#wechat_redirect" target="_blank" rel="noreferrer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#07C160" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8349 7.77337C16.1006 6.26341 14.243 4.971 12.1399 4.9707C11.0363 4.97041 9.35037 5.34927 8.09051 6.8727C7.24918 7.88999 6.96592 9.08059 7.14322 10.2679C7.26502 11.0837 7.71935 12.1599 8.36948 12.8406C8.61455 11.1149 9.52352 9.75765 10.7153 8.76004C12.8671 7.11614 15.1644 7.20923 16.8349 7.77337ZM18.5138 10.3623C17.1972 8.65377 14.9214 8.17576 12.867 8.93762L12.8839 8.94271L12.8839 8.94272C12.9445 8.96097 13.0051 8.97919 13.0654 8.99963C16.1071 10.0359 17.751 13.3356 16.7373 16.3698C16.4675 17.1769 16.0356 17.8828 15.4916 18.4664C16.1469 18.2849 16.8176 18.0255 17.393 17.5821C19.7095 15.7972 20.1655 12.5059 18.5138 10.3623ZM10.7935 15.6711C11.2241 15.7673 11.6718 15.8205 12.134 15.8205C13.5411 15.8205 14.6556 15.4931 15.7083 14.7187C15.681 15.1567 15.5493 15.684 15.4289 15.9945C14.4381 18.5511 11.5697 19.6592 8.56367 18.672C5.94984 17.8135 4.34812 14.7486 5.07994 12.1902C5.27618 11.5046 5.47671 11.0343 5.8532 10.4424C6.07903 12.0917 7.1058 13.6957 8.60274 14.7166C8.71655 14.7933 8.79439 14.9213 8.80075 15.0694C8.80283 15.1187 8.79424 15.1649 8.78329 15.2128L8.532 16.3534C8.52907 16.367 8.52561 16.3807 8.52212 16.3946C8.51188 16.4353 8.50138 16.477 8.50314 16.5185C8.50847 16.6417 8.61206 16.7377 8.73475 16.7324C8.78299 16.7303 8.82147 16.7105 8.86128 16.6852L10.2817 15.7746C10.3886 15.7061 10.503 15.662 10.6305 15.6565C10.6868 15.654 10.7409 15.6603 10.7935 15.6711Z"
              fill="white"
            />
          </svg>
        </a>
      </li>
      <li>
        <a aria-label="GitHub" href="https://github.com/Darmau" target="_blank" rel="noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#231E1B" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9771 4.5C7.84862 4.5 4.5 7.942 4.5 12.1856C4.5 15.5804 6.65596 18.4566 9.59174 19.4939C9.95872 19.5411 10.0963 19.3053 10.0963 19.1167C10.0963 18.9281 10.0963 18.4566 10.0963 17.7965C8.03211 18.268 7.57339 16.7592 7.57339 16.7592C7.25229 15.8633 6.74771 15.6275 6.74771 15.6275C6.05963 15.156 6.79358 15.156 6.79358 15.156C7.52752 15.2032 7.94037 15.9576 7.94037 15.9576C8.62844 17.1364 9.68349 16.8063 10.0963 16.6177C10.1422 16.0991 10.3716 15.769 10.555 15.5804C8.90367 15.3918 7.16055 14.7317 7.16055 11.7612C7.16055 10.9125 7.43578 10.2524 7.94037 9.68657C7.8945 9.54512 7.61927 8.74356 8.03211 7.70624C8.03211 7.70624 8.67431 7.51764 10.0963 8.5078C10.6927 8.3192 11.3349 8.27205 11.9771 8.27205C12.6193 8.27205 13.2615 8.36635 13.8578 8.5078C15.2798 7.51764 15.922 7.70624 15.922 7.70624C16.3349 8.74356 16.0596 9.54512 16.0138 9.73372C16.4725 10.2524 16.7936 10.9596 16.7936 11.8083C16.7936 14.7788 15.0505 15.3918 13.3991 15.5804C13.6743 15.8162 13.9037 16.2877 13.9037 16.9949C13.9037 18.0322 13.9037 18.8338 13.9037 19.1167C13.9037 19.3053 14.0413 19.5411 14.4083 19.4939C17.3899 18.4566 19.5 15.5804 19.5 12.1856C19.4541 7.942 16.1055 4.5 11.9771 4.5Z" fill="white" />
          </svg>

        </a>
      </li>
      <li>
        <a aria-label="Bilibili" href="https://space.bilibili.com/408764400" target="_blank" rel="noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#00A1D6" />
            <path d="M19.7149 14.8619C19.6344 14.8619 19.5658 14.8683 19.4984 14.8606C19.3619 14.8449 19.2253 14.8479 19.0885 14.8438C19.0003 14.8415 19.0029 14.8415 18.9954 14.7559C18.9736 14.4947 18.9497 14.2338 18.9263 13.9729C18.906 13.7437 18.8867 13.5142 18.8643 13.2853C18.844 13.0754 18.8196 12.8661 18.7974 12.6565C18.7764 12.4595 18.7568 12.2623 18.735 12.0655C18.7072 11.8179 18.6786 11.5704 18.6491 11.323C18.6226 11.1044 18.5964 10.8852 18.567 10.6669C18.5211 10.3283 18.4741 9.98986 18.4261 9.65158C18.3747 9.29114 18.313 8.93252 18.2484 8.5744C18.2369 8.51021 18.2384 8.50789 18.2996 8.49757C18.5542 8.454 18.81 8.41687 19.069 8.42255C19.097 8.42332 19.1253 8.42384 19.1531 8.42745C19.1986 8.43312 19.2222 8.45529 19.2248 8.5084C19.2338 8.69352 19.2467 8.87863 19.2603 9.06349C19.2822 9.36643 19.3058 9.66937 19.3284 9.97205C19.3428 10.167 19.3552 10.3614 19.3698 10.5558C19.3932 10.8682 19.4179 11.1805 19.4416 11.4929C19.456 11.684 19.4686 11.8755 19.4832 12.0666C19.5056 12.3471 19.53 12.6273 19.5527 12.9076C19.5671 13.086 19.5799 13.2647 19.5951 13.4431C19.6175 13.7073 19.6416 13.9716 19.6645 14.2359C19.6818 14.4421 19.6974 14.6489 19.7149 14.8619ZM9.85908 8.42538C9.89636 8.42538 9.95268 8.42126 10.0082 8.42641C10.0789 8.43286 10.0926 8.45116 10.0969 8.52232C10.1172 8.84769 10.1363 9.17332 10.1579 9.49895C10.1815 9.8501 10.2075 10.2007 10.2335 10.5514C10.2574 10.8734 10.2813 11.1954 10.307 11.5174C10.3351 11.8712 10.3662 12.2244 10.3945 12.5781C10.4158 12.8491 10.4341 13.12 10.4562 13.3913C10.4773 13.6429 10.5019 13.894 10.5246 14.1454C10.5439 14.3617 10.5634 14.5783 10.5822 14.7948C10.5881 14.8634 10.5832 14.8678 10.5094 14.866C10.3163 14.8614 10.1242 14.8387 9.93108 14.8441C9.88685 14.8454 9.87399 14.825 9.86653 14.783C9.85059 14.6914 9.85316 14.5984 9.84339 14.5058C9.8169 14.2611 9.80173 14.0154 9.77936 13.7703C9.7593 13.5475 9.73513 13.3253 9.71225 13.1028C9.69193 12.8993 9.67188 12.6959 9.65027 12.4922C9.62867 12.2924 9.60579 12.0924 9.58316 11.8923C9.56233 11.7082 9.54202 11.5241 9.5199 11.34C9.48724 11.0704 9.45484 10.8007 9.41936 10.5315C9.3867 10.2845 9.34967 10.0383 9.31496 9.79157C9.26764 9.45641 9.21441 9.12201 9.15553 8.78891C9.14207 8.71348 9.12784 8.63819 9.11284 8.56306C9.10513 8.52516 9.11207 8.50324 9.15527 8.49731C9.26893 8.4821 9.38233 8.45838 9.4965 8.4473C9.61067 8.43673 9.72485 8.41533 9.85908 8.42538ZM17.946 11.676C18.1636 11.676 18.1687 11.6775 18.2037 11.8737C18.2466 12.1158 18.2767 12.36 18.3053 12.6041C18.3353 12.8643 18.3657 13.1244 18.3935 13.3848C18.4158 13.5944 18.4346 13.8045 18.4557 14.0142C18.4778 14.2338 18.5012 14.4527 18.5241 14.6721C18.5367 14.7961 18.5485 14.9201 18.5627 15.0439C18.5668 15.0797 18.556 15.0988 18.5208 15.1029C18.4464 15.1114 18.3726 15.1212 18.2986 15.1292C18.1628 15.1439 18.0268 15.1584 17.8907 15.171C17.8205 15.1774 17.8159 15.1736 17.8028 15.1055C17.6835 14.488 17.5639 13.8711 17.4456 13.2533C17.3669 12.8426 17.2903 12.4317 17.2132 12.0209C17.2028 11.9644 17.1932 11.9078 17.1844 11.851C17.1792 11.8186 17.188 11.7977 17.2247 11.7889C17.4698 11.7314 17.7174 11.6871 17.946 11.676ZM8.80607 11.676C9.03878 11.676 9.03775 11.6768 9.07375 11.8884C9.1293 12.2161 9.16864 12.5456 9.20387 12.8761C9.23833 13.1969 9.27587 13.5173 9.30956 13.8381C9.33244 14.0575 9.35044 14.2774 9.37179 14.4965C9.38696 14.6525 9.40496 14.808 9.42142 14.9637C9.42347 14.9828 9.4245 15.0019 9.42579 15.0212C9.42913 15.0975 9.42579 15.1037 9.3525 15.1112C9.20721 15.1264 9.06167 15.139 8.91638 15.1535C8.86367 15.1586 8.81121 15.1664 8.75901 15.1715C8.68958 15.178 8.68727 15.1777 8.67364 15.1073C8.62478 14.8601 8.57747 14.6123 8.52964 14.365C8.41495 13.7695 8.29898 13.1744 8.18506 12.5789C8.13955 12.3406 8.10046 12.1014 8.05572 11.8629C8.04749 11.8193 8.05366 11.799 8.09866 11.7884C8.34141 11.7317 8.58569 11.6873 8.80607 11.676ZM11.8777 14.1732V15.1728C11.8777 15.1823 11.8766 15.1921 11.8779 15.2017C11.8828 15.2501 11.8651 15.2715 11.8152 15.2695C11.7496 15.2666 11.6845 15.2684 11.619 15.27C11.4822 15.2726 11.3451 15.2672 11.2086 15.2829C11.133 15.2917 11.1345 15.287 11.1271 15.2071C11.1047 14.9555 11.0803 14.7041 11.0574 14.4524C11.0363 14.2202 11.0173 13.9873 10.9957 13.755C10.9738 13.516 10.9494 13.2778 10.9273 13.0391C10.9121 12.8797 10.8987 12.7207 10.8853 12.5613C10.8679 12.354 10.8517 12.147 10.8334 11.9397C10.8257 11.8523 10.8321 11.84 10.9185 11.8309C11.1414 11.8063 11.3659 11.7993 11.5899 11.81C11.6457 11.8131 11.7013 11.824 11.7553 11.8371C11.8234 11.8534 11.8309 11.8634 11.8345 11.9348C11.8419 12.0787 11.8494 12.2226 11.8532 12.3667C11.8576 12.5268 11.854 12.6872 11.8599 12.8473C11.8748 13.2889 11.8725 13.7311 11.8777 14.1732ZM20.9994 14.2186V15.1651C20.9994 15.181 20.9989 15.197 20.9996 15.2133C21.003 15.2548 20.9837 15.2695 20.9443 15.2692C20.8477 15.2685 20.7512 15.2692 20.6548 15.2705C20.5458 15.2715 20.437 15.271 20.3282 15.2829C20.2565 15.2911 20.256 15.2857 20.2495 15.2143C20.22 14.8866 20.1889 14.5589 20.159 14.2307C20.1318 13.9283 20.1066 13.6256 20.0788 13.3229C20.0503 13.0107 20.0191 12.6993 19.9911 12.3873C19.9772 12.2311 19.9656 12.0748 19.9541 11.9186C19.9494 11.8505 19.9569 11.8384 20.0335 11.8322C20.1667 11.8217 20.2994 11.8036 20.4337 11.8059C20.5674 11.8085 20.7013 11.801 20.8343 11.8265C20.9469 11.8482 20.9526 11.8547 20.9593 11.9753C20.9785 12.3303 20.9726 12.6864 20.9852 13.0414C20.9981 13.4194 20.9891 13.7973 20.9994 14.2186ZM17.719 9.95838C17.7977 9.96302 17.8596 9.95916 17.9213 9.97282C17.9607 9.98184 17.9805 9.99963 17.9843 10.0419C18.0029 10.2453 18.0229 10.449 18.0432 10.6527C18.0594 10.818 18.0767 10.9832 18.0934 11.1485L18.0949 11.158C18.1083 11.2622 18.1052 11.265 18.0041 11.2707C17.9141 11.2756 17.8244 11.2836 17.7344 11.289C17.6753 11.2926 17.6565 11.3027 17.6467 11.2163C17.613 10.9115 17.5739 10.6076 17.5367 10.3031C17.5263 10.2175 17.5148 10.1321 17.5022 10.0468C17.4947 9.9986 17.5135 9.97205 17.5585 9.96818C17.6177 9.96277 17.6768 9.96122 17.719 9.95838ZM8.60858 9.95967C8.66927 9.96302 8.73175 9.95838 8.79295 9.97256C8.82792 9.98056 8.84567 9.99525 8.84901 10.0352C8.85647 10.1306 8.87112 10.2257 8.88012 10.3211C8.90867 10.6138 8.93567 10.9066 8.96241 11.1995C8.96807 11.2632 8.96678 11.2645 8.90738 11.2689C8.80195 11.2766 8.69627 11.2844 8.59058 11.2887C8.52912 11.2916 8.52141 11.2841 8.51369 11.2212C8.48695 11.0056 8.46175 10.7899 8.43604 10.5741C8.41521 10.3962 8.39772 10.2183 8.37252 10.0409C8.36558 9.9919 8.38152 9.97849 8.42061 9.9705C8.48258 9.95787 8.54481 9.96199 8.60858 9.95967ZM11.817 10.7656C11.817 10.951 11.8175 11.1361 11.8167 11.3217C11.8167 11.405 11.8157 11.4055 11.7331 11.4045C11.6338 11.405 11.5346 11.3999 11.4359 11.389C11.3721 11.381 11.3708 11.3831 11.369 11.3153C11.3626 11.0887 11.3559 10.862 11.3513 10.6354C11.3479 10.482 11.3461 10.3291 11.3369 10.1757C11.332 10.0966 11.3364 10.0958 11.4122 10.0948C11.5241 10.0935 11.6357 10.0986 11.7468 10.1157C11.8136 10.126 11.8167 10.126 11.817 10.2002C11.8175 10.3887 11.8175 10.5772 11.8175 10.7659H11.817V10.7656ZM20.9433 10.7705C20.9433 10.9561 20.9438 11.1415 20.9431 11.3269C20.9431 11.4048 20.9418 11.4053 20.8639 11.4048C20.7615 11.4038 20.6593 11.399 20.5573 11.3903C20.5067 11.3864 20.4918 11.3651 20.4951 11.3189C20.4956 11.3125 20.4951 11.306 20.4951 11.2996C20.4874 10.9417 20.4797 10.5841 20.4725 10.2263C20.4722 10.2072 20.4712 10.1881 20.472 10.1688C20.473 10.0966 20.4733 10.0948 20.5455 10.0953C20.645 10.0958 20.7438 10.101 20.843 10.1108C20.9641 10.1229 20.9428 10.1378 20.9433 10.2337C20.9438 10.4124 20.9436 10.5916 20.9433 10.7705ZM8.35889 11.2057C8.36121 11.3076 8.36121 11.3073 8.26401 11.331C8.19792 11.3473 8.13183 11.3651 8.06523 11.3797C8.0084 11.3926 7.99837 11.3854 7.9886 11.3295C7.92072 10.95 7.85309 10.5702 7.78572 10.1904C7.77209 10.1118 7.77569 10.1069 7.85283 10.0932C7.94772 10.0765 8.04235 10.06 8.13723 10.0453C8.19766 10.0357 8.20538 10.0391 8.21746 10.1059C8.24138 10.2407 8.26401 10.3761 8.28175 10.5119C8.30926 10.7269 8.33189 10.9427 8.35658 11.158C8.35863 11.1737 8.35812 11.19 8.35889 11.2057ZM16.9126 10.1041C17.0368 10.0837 17.162 10.0631 17.2872 10.0432C17.3322 10.0362 17.3459 10.0646 17.3518 10.1048C17.3731 10.2533 17.3999 10.4008 17.4173 10.5496C17.4431 10.7651 17.4783 10.9796 17.485 11.197C17.4855 11.2191 17.4852 11.2418 17.4857 11.264C17.487 11.2985 17.4698 11.3163 17.4379 11.3238C17.3531 11.3429 17.2682 11.362 17.1836 11.3823C17.143 11.3921 17.1293 11.3748 17.1227 11.3351C17.0972 11.1841 17.0679 11.0338 17.0419 10.8832C16.9979 10.6352 16.9553 10.3869 16.9126 10.1386C16.9115 10.1296 16.9126 10.12 16.9126 10.1041ZM11.2003 10.9747C11.1967 11.1067 11.2047 11.2217 11.1867 11.3367C11.1813 11.373 11.1708 11.3965 11.1317 11.3999C11.0479 11.4068 10.9643 11.4135 10.881 11.422C10.8406 11.4264 10.8293 11.4089 10.8226 11.3692C10.8038 11.2519 10.8072 11.133 10.7959 11.0152C10.7745 10.7927 10.7655 10.5686 10.7511 10.3454C10.7475 10.291 10.7421 10.2371 10.7377 10.1827C10.7354 10.1523 10.7475 10.1352 10.7799 10.134C10.8884 10.1296 10.9964 10.1097 11.1055 10.1136C11.1692 10.1159 11.1746 10.12 11.1793 10.1845C11.1821 10.2291 11.1813 10.2742 11.1823 10.3191L11.2003 10.9747ZM20.3228 10.8468C20.3228 11.0005 20.3246 11.1542 20.3226 11.3078C20.3213 11.3877 20.3123 11.3947 20.2369 11.4017C20.1624 11.4086 20.0883 11.4143 20.014 11.4223C19.9721 11.4267 19.9525 11.4143 19.95 11.3661C19.9392 11.1619 19.9245 10.9577 19.9104 10.7538C19.8993 10.5846 19.8867 10.4158 19.8749 10.2469C19.8736 10.2275 19.8746 10.2082 19.8733 10.1891C19.8715 10.1554 19.8818 10.1355 19.9196 10.1342C20.0251 10.1306 20.1297 10.1102 20.2359 10.1141C20.3007 10.1164 20.3017 10.1175 20.3066 10.185C20.3223 10.4052 20.3239 10.6259 20.3228 10.8468ZM8.04749 13.5934C8.18069 13.7403 8.18738 13.9144 8.1434 14.0964C8.09918 14.2784 7.99837 14.4285 7.87623 14.5631C7.67129 14.7879 7.42366 14.9539 7.16034 15.0949C6.70699 15.3378 6.22639 15.4992 5.72495 15.5946C5.36418 15.6629 5.00109 15.7155 4.63414 15.7356C4.52229 15.7418 4.41069 15.747 4.29883 15.7462C4.21783 15.7462 4.13657 15.7485 4.05583 15.7457C3.98717 15.7431 3.97714 15.7312 3.97148 15.6593C3.95065 15.4012 3.93291 15.1429 3.91002 14.8848C3.88328 14.5857 3.85191 14.2869 3.82311 13.9879C3.80202 13.7715 3.78377 13.5547 3.76062 13.3389C3.73388 13.0847 3.70379 12.831 3.67448 12.5768C3.64774 12.3422 3.62202 12.1071 3.59374 11.8722C3.56211 11.612 3.52945 11.3524 3.49474 11.0928C3.46076 10.8428 3.42536 10.5929 3.38853 10.3433C3.32867 9.93246 3.26353 9.52241 3.1931 9.11325C3.13612 8.77963 3.07268 8.44715 3.00282 8.116C2.99356 8.07165 3.00693 8.05386 3.04576 8.03762C3.41785 7.88293 3.78865 7.7254 4.16048 7.56993C4.22966 7.54106 4.30063 7.51682 4.37417 7.50316C4.42509 7.49362 4.4382 7.50419 4.43666 7.5555C4.4328 7.68673 4.4382 7.81847 4.42534 7.94919C4.42221 7.98425 4.42049 8.01943 4.4202 8.05464C4.41429 8.52516 4.40863 8.99594 4.42097 9.46672C4.43177 9.87923 4.45337 10.2915 4.47729 10.7037C4.49606 11.0291 4.52306 11.3545 4.55083 11.6793C4.57809 11.9977 4.61126 12.3156 4.64237 12.634C4.64829 12.6946 4.65369 12.7003 4.72235 12.691C4.85764 12.6706 4.99415 12.6593 5.13095 12.6572C5.55601 12.6562 5.97413 12.7147 6.38762 12.813C6.74942 12.8991 7.10145 13.0138 7.43883 13.1742C7.60597 13.2536 7.76591 13.3454 7.91172 13.4619C7.96135 13.5011 8.00557 13.5462 8.04749 13.5934ZM17.1052 13.516C17.2697 13.6607 17.3297 13.8378 17.2829 14.057C17.244 14.2377 17.1561 14.3895 17.0388 14.5254C16.8506 14.7438 16.622 14.9098 16.3746 15.0485C15.8896 15.3208 15.373 15.4977 14.8299 15.5997C14.5335 15.6561 14.2345 15.698 13.9341 15.725C13.7638 15.7397 13.5928 15.7581 13.4018 15.7462H13.1786C13.1351 15.7462 13.1104 15.7325 13.1068 15.6807C13.0904 15.4543 13.0713 15.2282 13.051 15.0021C13.0294 14.7634 13.0055 14.5246 12.9829 14.2859C12.9623 14.0665 12.9433 13.8466 12.9209 13.6272C12.9003 13.4204 12.8767 13.2141 12.8543 13.0076C12.8335 12.8137 12.8134 12.6199 12.7905 12.4262C12.763 12.1916 12.734 11.957 12.7049 11.7224C12.6776 11.5035 12.6506 11.2849 12.6216 11.0662C12.5907 10.8319 12.5581 10.5978 12.5239 10.3639C12.4781 10.0605 12.429 9.75806 12.3806 9.45512C12.3132 9.02612 12.2352 8.59887 12.1466 8.17375C12.143 8.15493 12.1412 8.13559 12.1356 8.11729C12.1222 8.07604 12.1351 8.05412 12.1754 8.03814C12.5707 7.88319 12.9533 7.69627 13.3521 7.54879C13.4043 7.5292 13.4571 7.50728 13.5134 7.50161C13.564 7.49646 13.5769 7.50471 13.572 7.55885C13.5452 7.85251 13.5607 8.14771 13.5468 8.44163C13.5355 8.6814 13.5368 8.92194 13.5489 9.16198C13.5517 9.22282 13.554 9.28392 13.5535 9.34451C13.5504 9.63276 13.5656 9.92074 13.5802 10.2085C13.599 10.5888 13.6265 10.9683 13.6545 11.348C13.6749 11.6221 13.7013 11.8956 13.7271 12.1694C13.7407 12.3192 13.7553 12.4688 13.7739 12.6178C13.7839 12.7 13.788 12.7008 13.8685 12.69C14.0104 12.6707 14.1526 12.6549 14.2961 12.657C14.7996 12.6634 15.2931 12.7431 15.7773 12.8815C16.1051 12.9749 16.4242 13.0914 16.7256 13.2546C16.8616 13.3271 16.9889 13.4148 17.1052 13.516ZM5.47835 14.9364C5.66453 14.8472 6.56839 14.1389 6.64013 14.0234C6.20144 13.8339 5.76121 13.6578 5.28781 13.5137L5.47835 14.9364ZM15.7446 14.0698C15.7678 14.0448 15.7652 14.0255 15.7338 14.0116C15.6713 13.983 15.6094 13.9525 15.5461 13.9265C15.2085 13.788 14.8693 13.654 14.5214 13.5447C14.491 13.5354 14.4599 13.5142 14.4211 13.5323L14.6085 14.9302C14.6363 14.9364 14.6471 14.9235 14.6595 14.9147C14.9755 14.6822 15.2936 14.4524 15.597 14.2024C15.6482 14.1606 15.6988 14.1186 15.7446 14.0698Z" fill="white" />
          </svg>

        </a>
      </li>
      <li>
        <a aria-label="Twitter" href="https://twitter.com/herac1es" target="_blank" rel="noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#1DA1F2" />
            <path d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z" fill="white" />
          </svg>

        </a>
      </li>
      <li>
        <a aria-label="YouTube" href="https://www.youtube.com/channel/UCDWxwLxTQq0TmsaK1XWVYhQ" target="_blank" rel="noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#E63223" />
            <path d="M19.125 8.34375C18.9375 7.6875 18.4688 7.21875 17.8125 7.03125C16.6875 6.75 11.9062 6.75 11.9062 6.75C11.9062 6.75 7.21876 6.75 6.00001 7.03125C5.34376 7.21875 4.875 7.6875 4.6875 8.34375C4.5 9.5625 4.5 12 4.5 12C4.5 12 4.5 14.4375 4.78125 15.6562C4.96875 16.3125 5.4375 16.7812 6.09375 16.9687C7.21875 17.25 12 17.25 12 17.25C12 17.25 16.6875 17.25 17.9062 16.9687C18.5625 16.7812 19.0313 16.3125 19.2188 15.6562C19.5 14.4375 19.5 12 19.5 12C19.5 12 19.5 9.5625 19.125 8.34375ZM10.5 14.25V9.75L14.4375 12L10.5 14.25Z" fill="white" />
          </svg>

        </a>
      </li>
      <li>
        <a aria-label="Figma" href="https://figma.com/@darmau" target="_blank" rel="noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="black" />
            <path d="M11.9873 12C11.9873 10.7574 12.9947 9.75 14.2373 9.75C15.4799 9.75 16.4873 10.7574 16.4873 12C16.4873 13.2427 15.4799 14.25 14.2373 14.25C12.9947 14.25 11.9873 13.2427 11.9873 12Z" fill="#1ABCFE" />
            <path d="M7.4873 16.5C7.4873 15.2574 8.49467 14.25 9.73732 14.25H11.9873V16.5C11.9873 17.7427 10.98 18.75 9.73732 18.75C8.49467 18.75 7.4873 17.7427 7.4873 16.5Z" fill="#0ACF83" />
            <path d="M11.9873 5.25V9.75001H14.2373C15.48 9.75001 16.4873 8.74265 16.4873 7.50001C16.4873 6.25736 15.48 5.25 14.2373 5.25H11.9873Z" fill="#FF7262" />
            <path d="M7.4873 7.50001C7.4873 8.74266 8.49467 9.75001 9.73732 9.75001H11.9873V5.25H9.73732C8.49467 5.25 7.4873 6.25736 7.4873 7.50001Z" fill="#F24E1E" />
            <path d="M7.4873 12C7.4873 13.2427 8.49467 14.25 9.73732 14.25H11.9873V9.75H9.73732C8.49467 9.75 7.4873 10.7574 7.4873 12Z" fill="#A259FF" />
          </svg>

        </a>
      </li>
      <li>
        <a aria-label="Dribbble" href="https://dribbble.com/darmau" target="_blank" rel="noreferrer">
          <svg width="24" height1="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#EA4C89" />
            <path d="M12 3.75C7.446 3.75 3.75 7.446 3.75 12C3.75 16.554 7.446 20.25 12 20.25C16.5375 20.25 20.25 16.554 20.25 12C20.25 7.446 16.5375 3.75 12 3.75ZM17.445 7.545C18.435 8.7495 19.0125 10.2675 19.0455 11.934C18.8145 11.8845 16.488 11.4225 14.145 11.703C14.0955 11.5875 14.046 11.4555 13.9965 11.34C13.848 10.9935 13.6995 10.647 13.5345 10.317C16.1085 9.2775 17.2965 7.743 17.445 7.545ZM12 4.971C13.782 4.971 15.432 5.6475 16.6695 6.7365C16.5375 6.918 15.4815 8.337 12.9735 9.2775C11.8185 7.149 10.5315 5.4165 10.35 5.1525C10.878 5.037 11.4225 4.971 12 4.971ZM8.997 5.631C9.1785 5.8785 10.4325 7.6275 11.604 9.7065C8.304 10.581 5.4 10.5645 5.0865 10.5645C5.565 8.37 7.0335 6.555 8.997 5.631ZM4.9545 12.0165C4.9545 11.9505 4.9545 11.868 4.9545 11.802C5.2515 11.8185 8.6835 11.8515 12.198 10.7955C12.396 11.1915 12.594 11.5875 12.7755 12C12.693 12.033 12.594 12.0495 12.495 12.0825C8.865 13.254 6.9345 16.455 6.7695 16.719C5.631 15.465 4.9545 13.815 4.9545 12.0165ZM12 19.0455C10.3665 19.0455 8.865 18.4845 7.677 17.5605C7.809 17.2965 9.228 14.541 13.2045 13.155C13.221 13.1385 13.2375 13.1385 13.254 13.1385C14.244 15.7125 14.6565 17.8575 14.7555 18.4845C13.914 18.8475 12.9735 19.0455 12 19.0455ZM15.927 17.841C15.861 17.412 15.4815 15.3495 14.5575 12.825C16.7685 12.4785 18.699 13.056 18.9465 13.122C18.633 15.0855 17.511 16.785 15.927 17.841Z" fill="white" />
          </svg>
        </a>
      </li>
    </ul>
  )
}