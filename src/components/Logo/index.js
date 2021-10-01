export const Logo = ({ white }) => {
  if (white) {
    return (
      <svg width="77" height="64" viewBox="0 0 77 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5001 35.5649C46.8018 35.5649 53.5317 28.835 53.5317 20.5333C53.5317 12.2316 46.8018 5.50175 38.5001 5.50175C30.1984 5.50175 23.4686 12.2316 23.4686 20.5333C23.4686 28.835 30.1984 35.5649 38.5001 35.5649ZM38.5001 41.0667C49.8404 41.0667 59.0335 31.8736 59.0335 20.5333C59.0335 9.19309 49.8404 0 38.5001 0C27.1599 0 17.9668 9.19309 17.9668 20.5333C17.9668 31.8736 27.1599 41.0667 38.5001 41.0667Z" fill="#F0F0F0" />
        <path d="M50.1492 18.5436C51.3925 18.8605 52.8374 17.8774 53.3352 17.1161L54.7628 18.5436V24.3128L52.1563 26.9193C52.1563 25.0588 50.1761 24.4496 49.5809 24.2048C45.7716 22.6381 42.6369 29.362 41.5458 32.8218L41.9425 35.1719L39.7945 37.0386H37.2058L34.6686 35.1719L35.0615 32.814C33.9808 29.3427 30.8763 22.5965 27.1036 24.1684C26.5142 24.414 24.6475 25.0526 24.6475 26.9193L22.2146 24.4864V18.6046L23.665 17.1542C24.1629 17.9278 25.6077 18.9266 26.8511 18.6046C28.3446 18.2179 33.0241 14.7368 37.2058 14.7368L39.7945 14.7368C43.9762 14.7368 48.6557 18.1629 50.1492 18.5436Z" fill="#F0F0F0" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6035 18.0105C27.8971 18.3871 27.3014 18.691 26.9004 18.7949C26.2136 18.9727 25.4895 18.7828 24.8866 18.464C24.376 18.1939 23.9298 17.8196 23.6408 17.4563L22.4111 18.686V24.405L24.4851 26.479C24.6082 25.707 25.0479 25.1619 25.5333 24.7813C26.0339 24.3888 26.5952 24.1622 26.9153 24.033C26.9573 24.016 26.9951 24.0008 27.0281 23.987C28.0357 23.5672 29.0002 23.7065 29.8821 24.1962C30.7564 24.6818 31.5522 25.5121 32.2516 26.4853C33.6513 28.4328 34.7054 31.009 35.2491 32.7556L35.263 32.8002L34.8822 35.0852L37.2703 36.8421H39.721L41.7304 35.0959L41.3441 32.8079L41.3584 32.7627C41.9074 31.0217 42.9718 28.4539 44.3852 26.5127C45.0915 25.5426 45.8949 24.7152 46.7774 24.2314C47.6671 23.7437 48.6396 23.6052 49.6556 24.0231C49.6991 24.041 49.7519 24.0615 49.8123 24.0848C50.144 24.2134 50.7049 24.4307 51.2076 24.7975C51.7177 25.1696 52.1862 25.708 52.3168 26.4809L54.5663 24.2314V18.625L53.3582 17.4169C53.069 17.7747 52.6227 18.1429 52.1125 18.4085C51.5097 18.7223 50.7863 18.9088 50.1006 18.734C49.6999 18.6318 49.1044 18.3329 48.3979 17.9622C48.252 17.8856 48.1005 17.8055 47.9439 17.7227C47.3311 17.3986 46.6399 17.033 45.8947 16.6745C44.02 15.7726 41.8385 14.9333 39.7945 14.9333L37.2058 14.9333C35.1625 14.9333 32.9815 15.7858 31.1067 16.7022C30.3616 17.0664 29.6703 17.4379 29.0576 17.7671C28.9009 17.8513 28.7494 17.9327 28.6035 18.0105ZM30.9341 16.3492C32.8178 15.4284 35.0674 14.5404 37.2058 14.5404L39.7945 14.5404C41.9321 14.5404 44.1813 15.4141 46.0651 16.3204C46.8176 16.6824 47.5173 17.0525 48.1305 17.3768C48.2863 17.4592 48.4365 17.5386 48.5805 17.6142C49.3022 17.9929 49.8517 18.265 50.1977 18.3532C50.7554 18.4953 51.3761 18.3488 51.931 18.0599C52.4859 17.7711 52.9436 17.3559 53.1708 17.0085L53.3031 16.8061L54.9592 18.4622V24.3942L51.9598 27.3937V26.9193C51.9598 26.0718 51.5134 25.507 50.976 25.1149C50.5196 24.782 50.0159 24.586 49.6805 24.4555C49.6156 24.4303 49.5569 24.4074 49.5062 24.3866C48.6176 24.0211 47.7698 24.1356 46.9663 24.576C46.1555 25.0205 45.3928 25.7965 44.7029 26.744C43.3358 28.6216 42.2935 31.1182 41.7474 32.8359L42.1547 35.2479L39.8679 37.2351H37.1413L34.4549 35.2587L34.86 32.8279C34.3192 31.1043 33.2867 28.5989 31.9325 26.7147C31.2492 25.7639 30.4938 24.9855 29.6913 24.5398C28.8962 24.0982 28.0579 23.9837 27.1792 24.3498C27.1431 24.3649 27.103 24.3811 27.0596 24.3987C26.7368 24.5294 26.2292 24.7351 25.7758 25.0906C25.268 25.4887 24.844 26.063 24.844 26.9193V27.3937L22.0181 24.5678V18.5233L23.6984 16.843L23.8303 17.0479C24.0578 17.4014 24.5158 17.8232 25.0704 18.1166C25.6252 18.41 26.2452 18.5586 26.8018 18.4144C27.1475 18.3249 27.6968 18.0486 28.4186 17.6637C28.5626 17.5869 28.7128 17.5062 28.8685 17.4226C29.4818 17.093 30.1815 16.717 30.9341 16.3492Z" fill="#F0F0F0" />
        <path d="M8.01594 57.0385C8.01594 55.6987 8.28544 54.5283 8.82444 53.5273C9.37884 52.5263 10.1411 51.7563 11.1113 51.2173C12.0969 50.6783 13.2211 50.4088 14.4839 50.4088C16.1009 50.4088 17.4484 50.8323 18.5264 51.6793C19.6198 52.5263 20.3359 53.7198 20.6747 55.2598H16.4705C16.1163 54.2742 15.431 53.7814 14.4146 53.7814C13.6908 53.7814 13.1133 54.0663 12.6821 54.6361C12.2509 55.1905 12.0353 55.9913 12.0353 57.0385C12.0353 58.0857 12.2509 58.8942 12.6821 59.464C13.1133 60.0184 13.6908 60.2956 14.4146 60.2956C15.431 60.2956 16.1163 59.8028 16.4705 58.8172H20.6747C20.3359 60.3264 19.6198 61.5122 18.5264 62.3746C17.433 63.237 16.0855 63.6682 14.4839 63.6682C13.2211 63.6682 12.0969 63.3987 11.1113 62.8597C10.1411 62.3207 9.37884 61.5507 8.82444 60.5497C8.28544 59.5487 8.01594 58.3783 8.01594 57.0385ZM22.0023 57.0154C22.0023 55.691 22.2487 54.5283 22.7415 53.5273C23.2497 52.5263 23.935 51.7563 24.7974 51.2173C25.6598 50.6783 26.6223 50.4088 27.6849 50.4088C28.5935 50.4088 29.3866 50.5936 30.0642 50.9632C30.7572 51.3328 31.2885 51.8179 31.6581 52.4185V50.5936H35.6082V63.4834H31.6581V61.6585C31.2731 62.2591 30.7341 62.7442 30.0411 63.1138C29.3635 63.4834 28.5704 63.6682 27.6618 63.6682C26.6146 63.6682 25.6598 63.3987 24.7974 62.8597C23.935 62.3053 23.2497 61.5276 22.7415 60.5266C22.2487 59.5102 22.0023 58.3398 22.0023 57.0154ZM31.6581 57.0385C31.6581 56.0529 31.3809 55.2752 30.8265 54.7054C30.2875 54.1356 29.6253 53.8507 28.8399 53.8507C28.0545 53.8507 27.3846 54.1356 26.8302 54.7054C26.2912 55.2598 26.0217 56.0298 26.0217 57.0154C26.0217 58.001 26.2912 58.7864 26.8302 59.3716C27.3846 59.9414 28.0545 60.2263 28.8399 60.2263C29.6253 60.2263 30.2875 59.9414 30.8265 59.3716C31.3809 58.8018 31.6581 58.0241 31.6581 57.0385ZM42.416 52.7419C42.878 52.0335 43.4555 51.4791 44.1485 51.0787C44.8415 50.6629 45.6115 50.455 46.4585 50.455V54.6361H45.3728C44.3872 54.6361 43.648 54.8517 43.1552 55.2829C42.6624 55.6987 42.416 56.4379 42.416 57.5005V63.4834H38.4659V50.5936H42.416V52.7419ZM50.1946 63.6682C49.5016 63.6682 48.9318 63.468 48.4852 63.0676C48.054 62.6518 47.8384 62.1436 47.8384 61.543C47.8384 60.927 48.054 60.4111 48.4852 59.9953C48.9318 59.5795 49.5016 59.3716 50.1946 59.3716C50.8722 59.3716 51.4266 59.5795 51.8578 59.9953C52.3044 60.4111 52.5277 60.927 52.5277 61.543C52.5277 62.1436 52.3044 62.6518 51.8578 63.0676C51.4266 63.468 50.8722 63.6682 50.1946 63.6682ZM56.8526 49.2538C56.1596 49.2538 55.5898 49.0536 55.1432 48.6532C54.712 48.2374 54.4964 47.7292 54.4964 47.1286C54.4964 46.5126 54.712 46.0044 55.1432 45.604C55.5898 45.1882 56.1596 44.9803 56.8526 44.9803C57.5302 44.9803 58.0846 45.1882 58.5158 45.604C58.9624 46.0044 59.1857 46.5126 59.1857 47.1286C59.1857 47.7292 58.9624 48.2374 58.5158 48.6532C58.0846 49.0536 57.5302 49.2538 56.8526 49.2538ZM58.8161 50.5936V63.4834H54.866V50.5936H58.8161ZM68.8628 60.1339V63.4834H66.8531C65.4209 63.4834 64.3044 63.1369 63.5036 62.4439C62.7028 61.7355 62.3024 60.5882 62.3024 59.002V53.8738H60.7316V50.5936H62.3024V47.452H66.2525V50.5936H68.8397V53.8738H66.2525V59.0482C66.2525 59.4332 66.3449 59.7104 66.5297 59.8798C66.7145 60.0492 67.0225 60.1339 67.4537 60.1339H68.8628Z" fill="#F0F0F0" />
      </svg>
    )
  } else {
    return (
      < svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 27.7129C36.4689 27.7129 41.7129 22.4689 41.7129 16C41.7129 9.53113 36.4689 4.28708 30 4.28708C23.5311 4.28708 18.2871 9.53113 18.2871 16C18.2871 22.4689 23.5311 27.7129 30 27.7129ZM30 32C38.8366 32 46 24.8366 46 16C46 7.16344 38.8366 0 30 0C21.1634 0 14 7.16344 14 16C14 24.8366 21.1634 32 30 32Z" fill="#242742" />
        <path d="M39.0772 14.4496C40.046 14.6965 41.1719 13.9305 41.5598 13.3372L42.6722 14.4496V18.9451L40.6412 20.9761C40.6412 19.5263 39.0982 19.0517 38.6344 18.8609C35.6661 17.6401 33.2235 22.8795 32.3732 25.5755L32.6824 27.4067L31.0086 28.8612H28.9914L27.0144 27.4067L27.3206 25.5694C26.4785 22.8644 24.0593 17.6077 21.1196 18.8325C20.6603 19.0239 19.2057 19.5215 19.2057 20.9761L17.31 19.0803L17.31 14.4971L18.4402 13.3669C18.8281 13.9697 19.954 14.748 20.9228 14.4971C22.0866 14.1957 25.733 11.4833 28.9914 11.4833H31.0086C34.267 11.4833 37.9134 14.1529 39.0772 14.4496Z" fill="#242742" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2883 14.0342C21.7379 14.3276 21.2737 14.5644 20.9612 14.6453C20.4261 14.7839 19.8619 14.636 19.3921 14.3875C18.9942 14.1771 18.6465 13.8854 18.4213 13.6023L17.4631 14.5605L17.4631 19.0169L19.0792 20.633C19.1751 20.0314 19.5177 19.6067 19.896 19.3101C20.2861 19.0042 20.7235 18.8277 20.9729 18.727C21.0056 18.7138 21.035 18.7019 21.0607 18.6912C21.8459 18.3641 22.5975 18.4726 23.2846 18.8542C23.966 19.2326 24.586 19.8796 25.131 20.6379C26.2217 22.1554 27.0431 24.1629 27.4668 25.5239L27.4776 25.5586L27.1808 27.3391L29.0417 28.7081H30.9513L32.5171 27.3475L32.2161 25.5646L32.2272 25.5294C32.6551 24.1728 33.4844 22.1719 34.5858 20.6593C35.1362 19.9033 35.7622 19.2586 36.4498 18.8816C37.1431 18.5016 37.9009 18.3937 38.6926 18.7193C38.7265 18.7332 38.7676 18.7492 38.8146 18.7674C39.0732 18.8676 39.5102 19.0369 39.9019 19.3227C40.2994 19.6127 40.6645 20.0322 40.7662 20.6345L42.5191 18.8816V14.513L41.5777 13.5716C41.3524 13.8504 41.0046 14.1373 40.607 14.3443C40.1373 14.5888 39.5737 14.7341 39.0394 14.5979C38.7271 14.5183 38.2631 14.2854 37.7126 13.9965C37.5989 13.9368 37.4808 13.8744 37.3588 13.8099C36.8813 13.5574 36.3426 13.2725 35.762 12.9931C34.3012 12.2903 32.6013 11.6364 31.0086 11.6364H28.9914C27.3992 11.6364 25.6997 12.3006 24.2389 13.0147C23.6583 13.2985 23.1196 13.5879 22.6422 13.8445C22.5201 13.9101 22.4021 13.9735 22.2883 14.0342ZM24.1044 12.7396C25.5722 12.0221 27.3251 11.3301 28.9914 11.3301H31.0086C32.6743 11.3301 34.4269 12.011 35.8948 12.7172C36.4812 12.9993 37.0264 13.2877 37.5042 13.5404C37.6256 13.6046 37.7426 13.6664 37.8549 13.7254C38.4172 14.0205 38.8454 14.2325 39.115 14.3012C39.5495 14.4119 40.0332 14.2977 40.4656 14.0726C40.898 13.8476 41.2547 13.5241 41.4317 13.2534L41.5348 13.0957L42.8253 14.3861V19.0085L40.488 21.3457V20.9761C40.488 20.3157 40.1402 19.8756 39.7214 19.5701C39.3658 19.3106 38.9733 19.1579 38.712 19.0563C38.6614 19.0366 38.6157 19.0188 38.5761 19.0025C37.8837 18.7177 37.2231 18.8069 36.597 19.1502C35.9653 19.4965 35.3709 20.1012 34.8333 20.8395C33.7681 22.3026 32.9559 24.248 32.5303 25.5864L32.8477 27.4659L31.0658 29.0144H28.9412L26.8479 27.4743L27.1636 25.5802C26.7421 24.2372 25.9376 22.2848 24.8824 20.8166C24.3499 20.0758 23.7613 19.4692 23.136 19.1219C22.5164 18.7778 21.8632 18.6886 21.1785 18.9739C21.1503 18.9856 21.1191 18.9983 21.0853 19.012C20.8338 19.1138 20.4382 19.2741 20.0849 19.5511C19.6893 19.8613 19.3589 20.3088 19.3589 20.9761V21.3457L17.1569 19.1437L17.1569 14.4337L18.4662 13.1244L18.5689 13.2841C18.7462 13.5595 19.1031 13.8882 19.5353 14.1168C19.9676 14.3455 20.4507 14.4612 20.8845 14.3489C21.1538 14.2791 21.5818 14.0638 22.1442 13.764C22.2565 13.7041 22.3735 13.6412 22.4949 13.576C22.9727 13.3193 23.5179 13.0263 24.1044 12.7396Z" fill="#242742" />
        <path d="M6.24619 43.978C6.24619 42.934 6.45619 42.022 6.87619 41.242C7.30819 40.462 7.90219 39.862 8.65819 39.442C9.42619 39.022 10.3022 38.812 11.2862 38.812C12.5462 38.812 13.5962 39.142 14.4362 39.802C15.2882 40.462 15.8462 41.392 16.1102 42.592H12.8342C12.5582 41.824 12.0242 41.44 11.2322 41.44C10.6682 41.44 10.2182 41.662 9.88219 42.106C9.54619 42.538 9.37819 43.162 9.37819 43.978C9.37819 44.794 9.54619 45.424 9.88219 45.868C10.2182 46.3 10.6682 46.516 11.2322 46.516C12.0242 46.516 12.5582 46.132 12.8342 45.364H16.1102C15.8462 46.54 15.2882 47.464 14.4362 48.136C13.5842 48.808 12.5342 49.144 11.2862 49.144C10.3022 49.144 9.42619 48.934 8.65819 48.514C7.90219 48.094 7.30819 47.494 6.87619 46.714C6.45619 45.934 6.24619 45.022 6.24619 43.978ZM17.1446 43.96C17.1446 42.928 17.3366 42.022 17.7206 41.242C18.1166 40.462 18.6506 39.862 19.3226 39.442C19.9946 39.022 20.7446 38.812 21.5726 38.812C22.2806 38.812 22.8986 38.956 23.4266 39.244C23.9666 39.532 24.3806 39.91 24.6686 40.378V38.956H27.7466V49H24.6686V47.578C24.3686 48.046 23.9486 48.424 23.4086 48.712C22.8806 49 22.2626 49.144 21.5546 49.144C20.7386 49.144 19.9946 48.934 19.3226 48.514C18.6506 48.082 18.1166 47.476 17.7206 46.696C17.3366 45.904 17.1446 44.992 17.1446 43.96ZM24.6686 43.978C24.6686 43.21 24.4526 42.604 24.0206 42.16C23.6006 41.716 23.0846 41.494 22.4726 41.494C21.8606 41.494 21.3386 41.716 20.9066 42.16C20.4866 42.592 20.2766 43.192 20.2766 43.96C20.2766 44.728 20.4866 45.34 20.9066 45.796C21.3386 46.24 21.8606 46.462 22.4726 46.462C23.0846 46.462 23.6006 46.24 24.0206 45.796C24.4526 45.352 24.6686 44.746 24.6686 43.978ZM33.0514 40.63C33.4114 40.078 33.8614 39.646 34.4014 39.334C34.9414 39.01 35.5414 38.848 36.2014 38.848V42.106H35.3554C34.5874 42.106 34.0114 42.274 33.6274 42.61C33.2434 42.934 33.0514 43.51 33.0514 44.338V49H29.9734V38.956H33.0514V40.63ZM39.1126 49.144C38.5726 49.144 38.1286 48.988 37.7806 48.676C37.4446 48.352 37.2766 47.956 37.2766 47.488C37.2766 47.008 37.4446 46.606 37.7806 46.282C38.1286 45.958 38.5726 45.796 39.1126 45.796C39.6406 45.796 40.0726 45.958 40.4086 46.282C40.7566 46.606 40.9306 47.008 40.9306 47.488C40.9306 47.956 40.7566 48.352 40.4086 48.676C40.0726 48.988 39.6406 49.144 39.1126 49.144ZM44.3007 37.912C43.7607 37.912 43.3167 37.756 42.9687 37.444C42.6327 37.12 42.4647 36.724 42.4647 36.256C42.4647 35.776 42.6327 35.38 42.9687 35.068C43.3167 34.744 43.7607 34.582 44.3007 34.582C44.8287 34.582 45.2607 34.744 45.5967 35.068C45.9447 35.38 46.1187 35.776 46.1187 36.256C46.1187 36.724 45.9447 37.12 45.5967 37.444C45.2607 37.756 44.8287 37.912 44.3007 37.912ZM45.8307 38.956V49H42.7527V38.956H45.8307ZM53.6593 46.39V49H52.0933C50.9773 49 50.1073 48.73 49.4833 48.19C48.8593 47.638 48.5473 46.744 48.5473 45.508V41.512H47.3233V38.956H48.5473V36.508H51.6253V38.956H53.6413V41.512H51.6253V45.544C51.6253 45.844 51.6973 46.06 51.8413 46.192C51.9853 46.324 52.2253 46.39 52.5613 46.39H53.6593Z" fill="#242742" />
      </svg >
    )
  }

}