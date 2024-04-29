import './testwsp.css';

export default function TestWsp(){
  return(
    <main className="windowsWspFake">
    <div className='loading'>
      <div>
        <div className='min-h-44 flex justify-center items-end pb-11 '>
          <div className='animacionWSP'>

          <svg  xmlns="http://www.w3.org/2000/svg"  width="66"  height="66"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg></div>
          </div>
        
        
        <div className='min-h-[4px] w-80 relative'>
          <div className='min-h-[2px] min-w-full bg-neutral-500 z-10 absolute top-0 left-0'></div>
          <div className='animacionCarga'></div>
        </div>

        
        <div className='min-h-52 text-gray-500'>
          <div className='text-lg pt-5 text-center pb-1 text-gray-300'>WhastApp</div>
          <div className='text-center text-sm flex gap-1 items-center justify-center text-gray-500'>
          <span>
          <svg viewBox="0 0 10 12" height="14" width="10" preserveAspectRatio="xMidYMid meet" version="1.1"><title>lock-small</title><path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path></svg>
          </span>
          <span>Cifrado de extremo a extremo</span></div>
        </div>
      </div>
    
    </div>
      <section className="bigBox">
        <article className="boxLeft">
          <header className='boxProfile'>
            <figure className='photoProfile'>
              <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/429519356_952657249205543_9090372850506873388_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIAFfCN5OHuSkLsqoIJriWGX4UBw1KMKl42m5ps0Od0U2&oe=66395012&_nc_sid=e6ed6c&_nc_cat=103" />
            </figure>
              <div className='iconsOptions'>
                <span><svg viewBox="0 0 24 24" height="30" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>community-outline</title><path fill-rule="evenodd" clip-rule="evenodd" d="M6.37092 18.6728C6.22765 18.5403 6.10431 18.3762 6.00888 18.1973C5.88011 17.9559 5.80217 17.6876 5.79472 17.4335C5.77992 16.9291 5.75694 15.9341 5.81691 15.4918C5.84367 15.2944 5.89021 15.111 5.95079 14.9421C6.02312 14.7405 6.11792 14.5597 6.22835 14.3977C6.44698 14.077 6.72688 13.8296 7.01486 13.6386C7.04895 13.616 7.08314 13.5941 7.11736 13.5731C7.57933 13.2888 8.09602 13.1117 8.52831 12.9865C8.90306 12.878 9.34961 12.7693 9.85702 12.6823C10.485 12.5746 11.2062 12.5001 12 12.5001C12.7937 12.5001 13.5149 12.5746 14.1429 12.6823C14.6503 12.7693 15.0969 12.878 15.4716 12.9865C15.9039 13.1117 16.4206 13.2888 16.8826 13.5731C16.9168 13.5941 16.951 13.616 16.9851 13.6386C17.2731 13.8296 17.553 14.077 17.7716 14.3977C17.882 14.5597 17.9768 14.7405 18.0492 14.9421C18.1097 15.111 18.1563 15.2944 18.183 15.4918C18.243 15.9341 18.22 16.9291 18.2052 17.4335C18.1978 17.6876 18.1198 17.9559 17.9911 18.1973C17.8956 18.3762 17.7723 18.5403 17.629 18.6729C17.4138 18.872 17.1536 19 16.8756 19H7.12434C6.84632 19 6.58614 18.872 6.37092 18.6728ZM19.9606 15.4041C20.0099 15.9938 20.0031 16.2628 19.992 17C19.9887 17.22 19.985 17.3926 19.9822 17.4856C19.9692 17.9298 19.8643 18.6252 19.6869 19H22.6608C23.3769 19 23.9744 17.1535 23.9908 16.4244C24 16.0153 24.0117 16.2932 23.9736 15.9559C23.8921 15.2339 23.4788 14.7098 23.0245 14.3596C22.5875 14.0227 22.0691 13.8088 21.6087 13.6766C21.6029 13.675 21.5972 13.6733 21.5915 13.6717C21.5881 13.6707 21.5847 13.6698 21.5813 13.6688C21.5228 13.6524 21.4627 13.6362 21.401 13.6205C20.8883 13.49 20.2632 13.389 19.5555 13.389C19.5378 13.389 19.52 13.3891 19.5023 13.3892C19.4137 13.3898 19.3264 13.392 19.2405 13.3957C19.355 13.5637 19.4612 13.7454 19.5555 13.942C19.5647 13.9611 19.5738 13.9805 19.5828 13.9999C19.6332 14.1094 19.68 14.2234 19.7226 14.342C19.8237 14.6239 19.9007 14.9282 19.9447 15.253C19.9506 15.2963 19.9559 15.347 19.9606 15.4041ZM17.9339 11.4492C18.2894 11.7225 18.7156 11.9081 19.1802 11.9737C19.3028 11.991 19.4281 12 19.5555 12C20.1263 12 20.6553 11.8201 21.089 11.5141C21.7744 11.0305 22.2222 10.2319 22.2222 9.33C22.2222 7.85724 21.0283 6.67 19.5555 6.67C18.7591 6.67 18.0441 7.01722 17.5555 7.56905C17.1406 8.03762 16.8889 8.65371 16.8889 9.33C16.8889 9.57007 16.9206 9.80282 16.9801 10.0243C17.1343 10.5986 17.4753 11.0968 17.9339 11.4492ZM14.8977 9.61901C14.9641 9.52593 15.0262 9.42949 15.0835 9.33C15.3838 8.80927 15.5555 8.20499 15.5555 7.56C15.5555 7.36964 15.5406 7.18272 15.5117 7.00038C15.2434 5.30182 13.7733 4 12 4C10.2267 4 8.75657 5.30182 8.4882 7.00038C8.45939 7.18272 8.44443 7.36964 8.44443 7.56C8.44443 8.20499 8.61617 8.80927 8.91642 9.33C8.97378 9.42949 9.03584 9.52593 9.10229 9.61901C9.38894 10.0206 9.75728 10.3599 10.1831 10.6129C10.7148 10.9287 11.3362 11.11 12 11.11C12.6638 11.11 13.2851 10.9287 13.8168 10.6129C14.2427 10.3599 14.611 10.0206 14.8977 9.61901ZM7.01988 10.0243C7.07937 9.80282 7.1111 9.57007 7.1111 9.33C7.1111 8.65371 6.85934 8.03762 6.44443 7.56905C5.95581 7.01722 5.2409 6.67 4.44444 6.67C2.97168 6.67 1.77777 7.85724 1.77777 9.33C1.77777 10.2319 2.22555 11.0305 2.91093 11.5141C3.34469 11.8201 3.87362 12 4.44444 12C4.5718 12 4.6971 11.991 4.8197 11.9737C5.28435 11.9081 5.71054 11.7225 6.06606 11.4492C6.52463 11.0967 6.86561 10.5985 7.01988 10.0243ZM2.599 13.6205C2.53726 13.6362 2.47715 13.6524 2.41872 13.6688C2.41531 13.6698 2.41189 13.6707 2.40848 13.6717C2.40276 13.6733 2.39702 13.675 2.39128 13.6766C1.9309 13.8088 1.41245 14.0227 0.975466 14.3596C0.521192 14.7098 0.107939 15.2339 0.0263682 15.9559C-0.0117388 16.2932 2.95136e-05 17.0153 0.00922726 17.4244C0.0256195 18.1535 0.623061 19 1.33916 19H4.31303C4.13562 18.6252 4.03074 17.9298 4.01771 17.4856C4.01498 17.3926 4.01127 17.22 4.00795 17C3.99682 16.2628 3.99008 15.9938 4.03932 15.4041C4.04409 15.347 4.04938 15.2963 4.05525 15.253C4.09928 14.9282 4.17628 14.6239 4.27738 14.342C4.31992 14.2234 4.36671 14.1094 4.41718 13.9999C4.42615 13.9805 4.43524 13.9612 4.44444 13.942C4.53872 13.7454 4.64492 13.5636 4.7595 13.3957C4.67357 13.392 4.58626 13.3898 4.49762 13.3892C4.47995 13.3891 4.46224 13.389 4.44446 13.389C3.73676 13.389 3.11171 13.49 2.599 13.6205ZM12 14.5001C10.7893 14.5001 9.78078 14.706 9.08457 14.9076C8.70827 15.0166 8.39668 15.1342 8.16548 15.2764C7.94245 15.4137 7.86482 15.5296 7.83338 15.6173C7.81839 15.6591 7.80612 15.7064 7.79878 15.7605C7.79943 15.7557 7.7992 15.7596 7.7984 15.7735C7.79628 15.8102 7.79017 15.9159 7.78551 16.1142C7.77998 16.3491 7.77773 16.6382 7.77778 16.9391C7.77784 17.3256 7.78168 16.7121 7.78618 17H16.2138C16.2183 16.7121 16.2221 17.3256 16.2222 16.9391C16.2222 16.6383 16.22 16.3491 16.2144 16.1142C16.2098 15.9159 16.2037 15.8101 16.2016 15.7735C16.2007 15.7596 16.2005 15.7557 16.2012 15.7605C16.1938 15.7064 16.1816 15.6591 16.1666 15.6173C16.1351 15.5296 16.0575 15.4137 15.8345 15.2764C15.6033 15.1342 15.2917 15.0166 14.9154 14.9076C14.2192 14.706 13.2107 14.5001 12 14.5001ZM12 6C11.1441 6 10.4444 6.69763 10.4444 7.56C10.4444 8.41504 11.1368 9.11 12 9.11C12.8632 9.11 13.5555 8.41504 13.5555 7.56C13.5555 6.69763 12.8558 6 12 6Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="30" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>status-unread-outline</title><path fill-rule="evenodd" clip-rule="evenodd" d="M3.71672 8.34119C3.23926 8.06362 3.07722 7.45154 3.35479 6.97407C4.33646 5.28548 5.79114 3.92134 7.53925 3.05006C9.28736 2.17878 11.2524 1.83851 13.1916 2.07126C13.74 2.13707 14.1312 2.63494 14.0654 3.18329C13.9995 3.73164 13.5017 4.12282 12.9533 4.05701C11.4019 3.87081 9.82989 4.14303 8.43141 4.84005C7.03292 5.53708 5.86917 6.62839 5.08384 7.97926C4.80626 8.45672 4.19419 8.61876 3.71672 8.34119Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8569 10.115C21.4065 10.0604 21.8963 10.4616 21.9509 11.0112C22.144 12.9548 21.7638 14.9125 20.857 16.6424C19.9503 18.3724 18.5567 19.799 16.8485 20.746C16.3655 21.0138 15.7568 20.8393 15.489 20.3563C15.2213 19.8732 15.3957 19.2646 15.8788 18.9968C17.2454 18.2392 18.3602 17.0979 19.0856 15.714C19.811 14.33 20.1152 12.7639 19.9607 11.209C19.9061 10.6594 20.3073 10.1696 20.8569 10.115Z" fill="currentColor"></path><path d="M6.34315 17.6568C7.89977 19.2135 9.93829 19.9945 11.9785 20C12.4928 20.0013 12.9654 20.3306 13.0791 20.8322C13.2105 21.4123 12.8147 21.9846 12.22 21.9976C9.58797 22.0552 6.93751 21.0796 4.92893 19.0711C2.90126 17.0434 1.92639 14.3616 2.00433 11.7049C2.02177 11.1104 2.59704 10.7188 3.17612 10.8546C3.67682 10.9721 4.00256 11.4471 4.00009 11.9614C3.99021 14.0216 4.77123 16.0849 6.34315 17.6568Z" fill="currentColor"></path><circle cx="19.95" cy="4.05005" r="3" fill="#009588"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="30" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>newsletter-outline</title><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8301 8.63404C16.3081 8.35745 16.9198 8.52076 17.1964 8.9988C17.7077 9.88244 18 10.9086 18 12C18 13.0914 17.7077 14.1176 17.1964 15.0012C16.9198 15.4792 16.3081 15.6425 15.8301 15.366C15.352 15.0894 15.1887 14.4776 15.4653 13.9996C15.8052 13.4122 16 12.7304 16 12C16 11.2696 15.8052 10.5878 15.4653 10.0004C15.1887 9.52237 15.352 8.91063 15.8301 8.63404ZM8.16995 8.63404C8.64798 8.91063 8.81129 9.52237 8.5347 10.0004C8.19484 10.5878 8 11.2696 8 12C8 12.7304 8.19484 13.4122 8.5347 13.9996C8.81129 14.4776 8.64798 15.0894 8.16995 15.366C7.69191 15.6425 7.08017 15.4792 6.80358 15.0012C6.29231 14.1176 6 13.0914 6 12C6 10.9086 6.29231 9.88244 6.80358 8.9988C7.08017 8.52076 7.69191 8.35745 8.16995 8.63404Z" fill="currentColor"></path><path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.33243 16.4826L5.09622 17.2728C4.86428 18.0487 4.62086 18.8707 4.41748 19.5825C5.12931 19.3791 5.95126 19.1357 6.72722 18.9038L7.51743 18.6676L8.24444 19.057C9.36447 19.6571 10.6412 20 12 20C16.4154 20 20 16.4154 20 12C20 7.58457 16.4154 4 12 4C7.58457 4 4 7.58457 4 12C4 13.3588 4.34295 14.6355 4.94296 15.7556L5.33243 16.4826ZM3.18 16.7C2.63 18.54 2 20.69 2 21C2 21.55 2.45 22 3 22C3.31 22 5.46 21.37 7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="30" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="30" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span>
              </div>
          </header>
          <div className='boxSearchChat'>
            <label name="search" className='boxSearchOptions'>
              <div className='showSearch'>
              <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>search</title><path fill="rgb(134,150,160)" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
              </div>
              <div className='goSearch'>
              <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>back</title><path fill="rgb(1,168,132)" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
              </div>
              <input name='search' placeholder='Buscar' type='text'/>
            </label>
            <div className='filterDontRead'>
            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" ><title>filter</title><path fill="#8696a0" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path></svg>
            </div>
          </div>
          <div className='boxChatList'>


              <label htmlFor='chat1' name='chat1'>
            <div className='boxChatPreview'>
              
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Gastos</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 18 18" height="20" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      $20000 de luz
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>23:04</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
              </label>

            <label htmlFor='chat2' name='chat2'>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/301439940_116500521203102_3299349136476507305_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIDQTMsFPzWymMU2ICewLoawZETLcNyv3skc062qNJUC6&oe=6636CB16&_nc_sid=e6ed6c&_nc_cat=108" />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Mariano</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 18 18" height="20" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      Hoy se juega a la pelota, vas?
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            </label>


            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/425546086_1609855713150481_5740327734460443682_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIFWOfB9QKv7dIuSYq7Ogv8OFgbyS1fWFRy7kjN4VPEUG&oe=6639476C&_nc_sid=e6ed6c&_nc_cat=102" />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Dai</p>
                    <p className='textChatList'>
                    <span className='spanChat'>
                      El domingo asado en mi casa
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>21:22</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/370537000_139984202508088_3619165344788927939_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_Q5AaICIqFUFwk8JExX79QI6VEHQ63fjDRY88haLoaaEYeoZX&amp;oe=6636A5CC&amp;_nc_sid=e6ed6c&amp;_nc_cat=109' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Gabriela</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 18 18" height="20" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      Ya hice mi parte, cuando nos conectamos?
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>20:44</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/161974473_414581580487797_3682940019197293250_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaINxY_b8470uSJq2H87U8ZRoL7oyhyhpZKIndT2ZgpgEa&oe=6639504A&_nc_sid=e6ed6c&_nc_cat=110' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Adolfo</p>
                    <p className='textChatList'>
                    <span className='spanChat'>
                      lol ?
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>20:23</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/418510322_1295329308509667_8969091329936507975_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaILzDH0uGyJcAvZjYFCQSOswE9i4lK6HqUtnhysU0QGVi&oe=6638AADF&_nc_sid=e6ed6c&_nc_cat=110" />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Pri</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 18 18" height="20" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      No puedo ir
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>19:33</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/256947678_1316461958821260_4355380543494983824_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaID-On5iBXmMo0WOCfZjADL4h8e4mhHE3akKtUCNbDnfD&oe=663950CA&_nc_sid=e6ed6c&_nc_cat=100' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Hernán</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 16 16" height="20" width="16" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-sticker</title><path fill="currentColor" d="M9.179,14.637c0.061-0.14,0.106-0.29,0.135-0.45 c0.031-0.171,0.044-0.338,0.049-0.543c0.002-0.078,0.003-0.155,0.003-0.233c0-0.043,0-0.043,0.001-0.067c0-0.024,0-0.024,0-0.072 l0.002-0.216c0.01-0.364,0.032-1.205,0.08-1.473c0.052-0.287,0.136-0.538,0.255-0.771c0.122-0.237,0.281-0.453,0.472-0.642 c0.193-0.191,0.412-0.349,0.653-0.469c0.238-0.12,0.493-0.203,0.786-0.255c0.27-0.048,1.098-0.07,1.487-0.08l0.152,0.001 c0.027,0,0.027,0,0.047,0c0.045,0,0.088-0.001,0.325-0.004c0.221-0.006,0.384-0.018,0.554-0.048 c0.177-0.032,0.341-0.081,0.494-0.151c-0.201,0.923-0.671,1.77-1.359,2.429c-0.561,0.538-1.264,1.194-2.057,1.924 C10.667,14.061,9.951,14.444,9.179,14.637z M7.358,14.797c-0.203,0.005-0.406,0.01-0.474,0.012c-0.301,0.007-0.448,0.01-0.507,0.009 c-0.551-0.015-0.96-0.046-1.372-0.119c-0.481-0.086-0.912-0.226-1.314-0.428c-0.416-0.209-0.794-0.48-1.123-0.807 c-0.33-0.326-0.605-0.699-0.816-1.11c-0.205-0.397-0.347-0.824-0.434-1.303c-0.074-0.411-0.106-0.827-0.12-1.356 C1.193,9.5,1.19,9.297,1.189,9.078c-0.002-0.206-0.002-0.37-0.002-0.736V7.668c0-0.274,0-0.396,0.001-0.549 c0-0.064,0.001-0.125,0.001-0.182c0.001-0.223,0.004-0.426,0.009-0.62c0.014-0.529,0.046-0.946,0.121-1.358 c0.087-0.476,0.229-0.903,0.434-1.301c0.211-0.411,0.485-0.784,0.814-1.109c0.33-0.327,0.708-0.599,1.122-0.807 c0.403-0.203,0.834-0.344,1.315-0.429c0.413-0.074,0.822-0.105,1.379-0.12c0.72-0.009,0.989-0.011,1.359-0.011H8.27 c0.896,0.003,1.143,0.005,1.366,0.011c0.55,0.015,0.959,0.046,1.371,0.12c0.482,0.085,0.913,0.226,1.314,0.428 c0.416,0.209,0.794,0.48,1.123,0.806c0.331,0.327,0.605,0.7,0.814,1.109c0.206,0.4,0.348,0.827,0.434,1.302 c0.075,0.412,0.107,0.819,0.121,1.356c0.006,0.198,0.009,0.402,0.01,0.619c0,0.008,0,0.016,0,0.024c0,0.069-0.001,0.132-0.003,0.194 c-0.004,0.162-0.014,0.283-0.033,0.391c-0.019,0.106-0.05,0.197-0.092,0.28c-0.044,0.085-0.1,0.162-0.168,0.229 c-0.069,0.069-0.148,0.125-0.234,0.168s-0.179,0.074-0.29,0.094c-0.108,0.019-0.227,0.028-0.395,0.033 c-0.231,0.003-0.27,0.003-0.311,0.004c-0.018,0-0.018,0-0.039,0l-0.163-0.001c-0.453,0.012-1.325,0.036-1.656,0.096 c-0.388,0.069-0.737,0.183-1.064,0.348c-0.336,0.168-0.643,0.389-0.911,0.655c-0.267,0.263-0.49,0.566-0.661,0.899 c-0.166,0.324-0.281,0.67-0.351,1.054c-0.06,0.33-0.085,1.216-0.096,1.636l-0.002,0.23c0,0.052,0,0.052,0,0.069 c0,0.019,0,0.019-0.001,0.067c0,0.074-0.001,0.143-0.003,0.213c-0.004,0.158-0.014,0.28-0.033,0.388 c-0.02,0.106-0.05,0.197-0.092,0.279c-0.044,0.085-0.1,0.162-0.168,0.229c-0.069,0.069-0.148,0.125-0.234,0.168 c-0.086,0.043-0.179,0.073-0.289,0.093C7.478,14.785,7.421,14.792,7.358,14.797z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      Sticker
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>18:02</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/344455381_1030183248354722_5799318174052758271_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIH3uODkJbs8SKEmtfefgqVicjVP9vngF6dni8yrjZBHA&oe=6636CFF6&_nc_sid=e6ed6c&_nc_cat=111" />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Maxi</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 18 18" height="20" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      Listo, ya lo presenté!
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>14:07</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/57556983_2395347163829880_3088307843485401088_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIHL5LT7Y5buSil169yHAJBen5klTRm2gWrjFXSJBlWfF&oe=6638D5BB&_nc_sid=e6ed6c&_nc_cat=107" />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Erico</p>
                    <p className='textChatList'>
                    <span className='spanChat'>
                      Vieja como andas?
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>11:11</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/424425434_1156045632250245_7269222847415074304_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIC9u8ZHWsxVIOH2l83T5VFoDMQ3Q0IjGCAgKErFci8hj&oe=6638C671&_nc_sid=e6ed6c&_nc_cat=103" />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Martín</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 18 18" height="20" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      Hoy se entrega el práctico, como lo hiciste? Yo no hice nada!!! Me quiero matar
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>7:58</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/425112536_388521983759889_2240825185364318291_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIAm945l6jGrqZIxzgBgwjw1mt2CsXjCr1OLCX8P9tR4l&oe=6638BB29&_nc_sid=e6ed6c&_nc_cat=106" />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Gonzalo</p>
                    <p className='textChatList'>
                    <span className='spanChat'>
                      Hoy se llega a oro pepito
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>2:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/370537000_139984202508088_3619165344788927939_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_Q5AaICIqFUFwk8JExX79QI6VEHQ63fjDRY88haLoaaEYeoZX&amp;oe=6636A5CC&amp;_nc_sid=e6ed6c&amp;_nc_cat=109' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Gastos</p>
                    <p className='textChatList'>
                    <span>
                      <svg viewBox="0 0 18 18" height="20" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    </span>
                    <span className='spanChat'>
                      Texto random que debo agregar Texto random que debo agregar Texto random que debo agregar Texto random que debo agregar Texto random que debo agregar
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>Ayer</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/422833534_1436294136970509_3804214950904239737_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIO_cWyFKXoPkGsyeaOW5jOAjbmjZmzTLDNU0acwztOMJ&oe=6636A80B&_nc_sid=e6ed6c&_nc_cat=101"/>
              </div>
              <div className='boxChatTextPreview lastChat'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Ramón</p>
                    <p className='textChatList'>
                    <span className='spanChat'>
                      Me vuelvo a concepción el jueves de la semana que viene
                    </span>
                    </p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>Ayer</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>chevron-right</title><path fill="#8696a0" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <footer className='footerLeftSide'>
            <span>
            <svg viewBox="0 0 10 12" height="16" width="12" preserveAspectRatio="xMidYMid meet" version="1.1"><title>lock-small</title><path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path></svg>
            </span>
              Tus mensajes personales están <span className='textHighlined'>cifrados de extremo a extremo</span>.
            </footer>

          </div>
        </article>



        <article className="boxRight ">
        <div>
          <input type='radio' id='chat1' name='chat1' className='hidden input1'/>
          <div className='verChat'>
            <div className='bgFondo'></div>
            <div className='bgChat'></div>
            <div className='absolute inset-0'>
              <header className='h-[59px] px-3 gap-3 w-full chatHeader text-white text-lg flex items-center'>
                <div className='pictureChatBig'>
                  <img src='/images/wsp-chat.webp' />
                </div>
                <div className='chatName flex flex-col justify-center w-full'>
                  <h4 className=''>Gastos</h4>
                  <p className='text-xs text-neutral-400'>últ. vez hoy a la(s) 21:21</p>
                </div>
                <div className='flex gap-6 justify-center items-center'>

                <div className='videoOptions'>
                  <span>
                    <svg viewBox="0 0 24 24" height="30" width="22" preserveAspectRatio="xMidYMid meet" fill="none"><title>video-call</title><path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z" fill="currentColor"></path><path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z" fill="currentColor"></path></svg>
                  </span>
                  <span>
                    <svg viewBox="0 0 17 13" height="10" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 17 13"><title>chevron-down-alt</title><path fill="currentColor" d="M3.202,2.5l5.2,5.2l5.2-5.2l1.5,1.5l-6.7,6.5l-6.6-6.6L3.202,2.5z"></path></svg>
                  </span>
                </div>
                <div>
                <svg viewBox="0 0 24 24" height="30" width="30" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>search</title><path fill="rgb(134,150,160)" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
                </div>
                <div>
                <svg viewBox="0 0 24 24" height="30" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                </div>
                </div>
              </header>
              <div className='chatIndividual'>
                <div className='chatI'>
                  <div className='colitaChatI'></div>
                  Anotando
                </div>
                <div className='chatYou'>
                  <div className='colitaChatYou'></div>
                  $20000 de luz
                </div>
              </div>
              <footer className='absolute bottom-0 w-full px-3 footerChat h-[59px] flex justify-center items-center'>
                <span>
                <svg viewBox="0 0 24 24" height="28" width="28" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>smiley</title><path fill="#8696a0" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg>
                </span>
                <span>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>attach-menu-plus</title><path fillRule="evenodd" clipRule="evenodd" d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z" fill="#8696a0"></path></svg>
                </span>
                <input type='text' placeholder='Escribe un mensaje'/>
                <span className='ps-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>ptt</title><path fill="#8696a0" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
                </span>
              </footer>
            </div>
          </div>
        </div>

        <div>
          <input type='radio' id='chat2' name='chat1' className='hidden input1'/>
          <div className='verChat'>
            <div className='bgFondo'></div>
            <div className='bgChat'></div>
            <div className='absolute inset-0'>
              <header className='h-[59px] px-3 gap-3 w-full chatHeader text-white text-lg flex items-center'>
                <div className='pictureChatBig'>
                  <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/301439940_116500521203102_3299349136476507305_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIDQTMsFPzWymMU2ICewLoawZETLcNyv3skc062qNJUC6&oe=6636CB16&_nc_sid=e6ed6c&_nc_cat=108" />
                </div>
                <div className='chatName flex flex-col justify-center w-full'>
                  <h4 className=''>Mariano</h4>
                  <p className='text-xs text-neutral-400'>últ. vez hoy a la(s) 22:03</p>
                </div>
                <div className='flex gap-6 justify-center items-center'>

                <div className='videoOptions'>
                  <span>
                    <svg viewBox="0 0 24 24" height="30" width="22" preserveAspectRatio="xMidYMid meet" fill="none"><title>video-call</title><path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z" fill="currentColor"></path><path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z" fill="currentColor"></path></svg>
                  </span>
                  <span>
                    <svg viewBox="0 0 17 13" height="10" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 17 13"><title>chevron-down-alt</title><path fill="currentColor" d="M3.202,2.5l5.2,5.2l5.2-5.2l1.5,1.5l-6.7,6.5l-6.6-6.6L3.202,2.5z"></path></svg>
                  </span>
                </div>
                <div>
                <svg viewBox="0 0 24 24" height="30" width="30" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>search</title><path fill="rgb(134,150,160)" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
                </div>
                <div>
                <svg viewBox="0 0 24 24" height="30" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                </div>
                </div>
              </header>
              <div className='chatIndividual'>
                <div className='chatYou'>
                  <div className='colitaChatYou'></div>
                  Me voy a dormir
                </div>
                <div className='chatI'>
                  <div className='colitaChatI'></div>
                  Chango!
                </div>
                <div className='chatI'>
                  Que hace
                </div>
                <div className='chatI'>
                  Ya estas bien de la rodilla?
                </div>
                <div className='chatI'>
                  Hoy se juega a la pelota, vas?
                </div>
              </div>
              <footer className='absolute bottom-0 w-full px-3 footerChat h-[59px] flex justify-center items-center'>
                <span>
                <svg viewBox="0 0 24 24" height="28" width="28" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>smiley</title><path fill="#8696a0" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg>
                </span>
                <span>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>attach-menu-plus</title><path fillRule="evenodd" clipRule="evenodd" d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z" fill="#8696a0"></path></svg>
                </span>
                <input type='text' placeholder='Escribe un mensaje'/>
                <span className='ps-4'>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>ptt</title><path fill="#8696a0" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
                </span>
              </footer>
            </div>
          </div>
        </div>
{/* 
        <div>
          <div className='bgFondo'></div>
          <div className='bgChat'></div>
          <input type='radio' id='chat2' name='chat1' className='hidden input1'/>
          <div className='verChat'>
            <div>
              <header className='h-[59px] px-3 gap-3 w-full bg-neutral-800 text-white text-lg flex items-center'>
              <div className='pictureChatBig'>
                <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/301439940_116500521203102_3299349136476507305_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIDQTMsFPzWymMU2ICewLoawZETLcNyv3skc062qNJUC6&oe=6636CB16&_nc_sid=e6ed6c&_nc_cat=108" />
              </div>
              <h4>
                Mariano
              </h4>
              </header>
              <div>
                <div>Anotando</div>
                <div>Hoy se juega a la pelota, vas?</div>
              </div>
              <footer className='absolute bottom-0 w-full px-3 bg-neutral-900 h-[59px] flex justify-center items-center'>
                :D + chat Micro
              </footer>
            </div>
          </div>
        </div> */}










        <div className='boxRightTop'>
          <div className='imageBoxRight'>
            <img src='/images/wsp-chat.webp' />
          </div>
        </div>
          <div className='boxRightBottom'>
            <div className='boxRightBottomTop'>
              <div className='boxRightTextDownload'>
                Descarga WhatsApp para Windows
              </div>
              <div className='boxRightLegend'>
                <p>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</p>
              </div>
              <div className='buttonDownload'>
                Descargar de Microsoft Store
              </div>
            </div>
            <footer className='boxRightFooter'>
              <div>
                <span>
                  <svg viewBox="0 0 10 12" height="12" width="10" preserveAspectRatio="xMidYMid meet" version="1.1"><title>lock-small</title><path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path></svg>
                </span>
                <span>
                  Tus mensajes personales están cifrados de extremo a extremo.
                </span>
              </div>
            </footer>
          </div>
        </article>
      </section>
    </main>
  )
}