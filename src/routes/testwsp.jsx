import './testwsp.css';

export default function TestWsp(){
  return(
    <main className="windowsWspFake">
      <section className="bigBox">
        <article className="boxLeft">
          <header className='boxProfile'>
            <figure className='photoProfile'>
              <img src='/images/wsp-chat.webp'/>
            </figure>
              <div className='iconsOptions'>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>community-outline</title><path fill-rule="evenodd" clip-rule="evenodd" d="M6.37092 18.6728C6.22765 18.5403 6.10431 18.3762 6.00888 18.1973C5.88011 17.9559 5.80217 17.6876 5.79472 17.4335C5.77992 16.9291 5.75694 15.9341 5.81691 15.4918C5.84367 15.2944 5.89021 15.111 5.95079 14.9421C6.02312 14.7405 6.11792 14.5597 6.22835 14.3977C6.44698 14.077 6.72688 13.8296 7.01486 13.6386C7.04895 13.616 7.08314 13.5941 7.11736 13.5731C7.57933 13.2888 8.09602 13.1117 8.52831 12.9865C8.90306 12.878 9.34961 12.7693 9.85702 12.6823C10.485 12.5746 11.2062 12.5001 12 12.5001C12.7937 12.5001 13.5149 12.5746 14.1429 12.6823C14.6503 12.7693 15.0969 12.878 15.4716 12.9865C15.9039 13.1117 16.4206 13.2888 16.8826 13.5731C16.9168 13.5941 16.951 13.616 16.9851 13.6386C17.2731 13.8296 17.553 14.077 17.7716 14.3977C17.882 14.5597 17.9768 14.7405 18.0492 14.9421C18.1097 15.111 18.1563 15.2944 18.183 15.4918C18.243 15.9341 18.22 16.9291 18.2052 17.4335C18.1978 17.6876 18.1198 17.9559 17.9911 18.1973C17.8956 18.3762 17.7723 18.5403 17.629 18.6729C17.4138 18.872 17.1536 19 16.8756 19H7.12434C6.84632 19 6.58614 18.872 6.37092 18.6728ZM19.9606 15.4041C20.0099 15.9938 20.0031 16.2628 19.992 17C19.9887 17.22 19.985 17.3926 19.9822 17.4856C19.9692 17.9298 19.8643 18.6252 19.6869 19H22.6608C23.3769 19 23.9744 17.1535 23.9908 16.4244C24 16.0153 24.0117 16.2932 23.9736 15.9559C23.8921 15.2339 23.4788 14.7098 23.0245 14.3596C22.5875 14.0227 22.0691 13.8088 21.6087 13.6766C21.6029 13.675 21.5972 13.6733 21.5915 13.6717C21.5881 13.6707 21.5847 13.6698 21.5813 13.6688C21.5228 13.6524 21.4627 13.6362 21.401 13.6205C20.8883 13.49 20.2632 13.389 19.5555 13.389C19.5378 13.389 19.52 13.3891 19.5023 13.3892C19.4137 13.3898 19.3264 13.392 19.2405 13.3957C19.355 13.5637 19.4612 13.7454 19.5555 13.942C19.5647 13.9611 19.5738 13.9805 19.5828 13.9999C19.6332 14.1094 19.68 14.2234 19.7226 14.342C19.8237 14.6239 19.9007 14.9282 19.9447 15.253C19.9506 15.2963 19.9559 15.347 19.9606 15.4041ZM17.9339 11.4492C18.2894 11.7225 18.7156 11.9081 19.1802 11.9737C19.3028 11.991 19.4281 12 19.5555 12C20.1263 12 20.6553 11.8201 21.089 11.5141C21.7744 11.0305 22.2222 10.2319 22.2222 9.33C22.2222 7.85724 21.0283 6.67 19.5555 6.67C18.7591 6.67 18.0441 7.01722 17.5555 7.56905C17.1406 8.03762 16.8889 8.65371 16.8889 9.33C16.8889 9.57007 16.9206 9.80282 16.9801 10.0243C17.1343 10.5986 17.4753 11.0968 17.9339 11.4492ZM14.8977 9.61901C14.9641 9.52593 15.0262 9.42949 15.0835 9.33C15.3838 8.80927 15.5555 8.20499 15.5555 7.56C15.5555 7.36964 15.5406 7.18272 15.5117 7.00038C15.2434 5.30182 13.7733 4 12 4C10.2267 4 8.75657 5.30182 8.4882 7.00038C8.45939 7.18272 8.44443 7.36964 8.44443 7.56C8.44443 8.20499 8.61617 8.80927 8.91642 9.33C8.97378 9.42949 9.03584 9.52593 9.10229 9.61901C9.38894 10.0206 9.75728 10.3599 10.1831 10.6129C10.7148 10.9287 11.3362 11.11 12 11.11C12.6638 11.11 13.2851 10.9287 13.8168 10.6129C14.2427 10.3599 14.611 10.0206 14.8977 9.61901ZM7.01988 10.0243C7.07937 9.80282 7.1111 9.57007 7.1111 9.33C7.1111 8.65371 6.85934 8.03762 6.44443 7.56905C5.95581 7.01722 5.2409 6.67 4.44444 6.67C2.97168 6.67 1.77777 7.85724 1.77777 9.33C1.77777 10.2319 2.22555 11.0305 2.91093 11.5141C3.34469 11.8201 3.87362 12 4.44444 12C4.5718 12 4.6971 11.991 4.8197 11.9737C5.28435 11.9081 5.71054 11.7225 6.06606 11.4492C6.52463 11.0967 6.86561 10.5985 7.01988 10.0243ZM2.599 13.6205C2.53726 13.6362 2.47715 13.6524 2.41872 13.6688C2.41531 13.6698 2.41189 13.6707 2.40848 13.6717C2.40276 13.6733 2.39702 13.675 2.39128 13.6766C1.9309 13.8088 1.41245 14.0227 0.975466 14.3596C0.521192 14.7098 0.107939 15.2339 0.0263682 15.9559C-0.0117388 16.2932 2.95136e-05 17.0153 0.00922726 17.4244C0.0256195 18.1535 0.623061 19 1.33916 19H4.31303C4.13562 18.6252 4.03074 17.9298 4.01771 17.4856C4.01498 17.3926 4.01127 17.22 4.00795 17C3.99682 16.2628 3.99008 15.9938 4.03932 15.4041C4.04409 15.347 4.04938 15.2963 4.05525 15.253C4.09928 14.9282 4.17628 14.6239 4.27738 14.342C4.31992 14.2234 4.36671 14.1094 4.41718 13.9999C4.42615 13.9805 4.43524 13.9612 4.44444 13.942C4.53872 13.7454 4.64492 13.5636 4.7595 13.3957C4.67357 13.392 4.58626 13.3898 4.49762 13.3892C4.47995 13.3891 4.46224 13.389 4.44446 13.389C3.73676 13.389 3.11171 13.49 2.599 13.6205ZM12 14.5001C10.7893 14.5001 9.78078 14.706 9.08457 14.9076C8.70827 15.0166 8.39668 15.1342 8.16548 15.2764C7.94245 15.4137 7.86482 15.5296 7.83338 15.6173C7.81839 15.6591 7.80612 15.7064 7.79878 15.7605C7.79943 15.7557 7.7992 15.7596 7.7984 15.7735C7.79628 15.8102 7.79017 15.9159 7.78551 16.1142C7.77998 16.3491 7.77773 16.6382 7.77778 16.9391C7.77784 17.3256 7.78168 16.7121 7.78618 17H16.2138C16.2183 16.7121 16.2221 17.3256 16.2222 16.9391C16.2222 16.6383 16.22 16.3491 16.2144 16.1142C16.2098 15.9159 16.2037 15.8101 16.2016 15.7735C16.2007 15.7596 16.2005 15.7557 16.2012 15.7605C16.1938 15.7064 16.1816 15.6591 16.1666 15.6173C16.1351 15.5296 16.0575 15.4137 15.8345 15.2764C15.6033 15.1342 15.2917 15.0166 14.9154 14.9076C14.2192 14.706 13.2107 14.5001 12 14.5001ZM12 6C11.1441 6 10.4444 6.69763 10.4444 7.56C10.4444 8.41504 11.1368 9.11 12 9.11C12.8632 9.11 13.5555 8.41504 13.5555 7.56C13.5555 6.69763 12.8558 6 12 6Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>status-unread-outline</title><path fill-rule="evenodd" clip-rule="evenodd" d="M3.71672 8.34119C3.23926 8.06362 3.07722 7.45154 3.35479 6.97407C4.33646 5.28548 5.79114 3.92134 7.53925 3.05006C9.28736 2.17878 11.2524 1.83851 13.1916 2.07126C13.74 2.13707 14.1312 2.63494 14.0654 3.18329C13.9995 3.73164 13.5017 4.12282 12.9533 4.05701C11.4019 3.87081 9.82989 4.14303 8.43141 4.84005C7.03292 5.53708 5.86917 6.62839 5.08384 7.97926C4.80626 8.45672 4.19419 8.61876 3.71672 8.34119Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8569 10.115C21.4065 10.0604 21.8963 10.4616 21.9509 11.0112C22.144 12.9548 21.7638 14.9125 20.857 16.6424C19.9503 18.3724 18.5567 19.799 16.8485 20.746C16.3655 21.0138 15.7568 20.8393 15.489 20.3563C15.2213 19.8732 15.3957 19.2646 15.8788 18.9968C17.2454 18.2392 18.3602 17.0979 19.0856 15.714C19.811 14.33 20.1152 12.7639 19.9607 11.209C19.9061 10.6594 20.3073 10.1696 20.8569 10.115Z" fill="currentColor"></path><path d="M6.34315 17.6568C7.89977 19.2135 9.93829 19.9945 11.9785 20C12.4928 20.0013 12.9654 20.3306 13.0791 20.8322C13.2105 21.4123 12.8147 21.9846 12.22 21.9976C9.58797 22.0552 6.93751 21.0796 4.92893 19.0711C2.90126 17.0434 1.92639 14.3616 2.00433 11.7049C2.02177 11.1104 2.59704 10.7188 3.17612 10.8546C3.67682 10.9721 4.00256 11.4471 4.00009 11.9614C3.99021 14.0216 4.77123 16.0849 6.34315 17.6568Z" fill="currentColor"></path><circle cx="19.95" cy="4.05005" r="3" fill="#009588"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>newsletter-outline</title><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8301 8.63404C16.3081 8.35745 16.9198 8.52076 17.1964 8.9988C17.7077 9.88244 18 10.9086 18 12C18 13.0914 17.7077 14.1176 17.1964 15.0012C16.9198 15.4792 16.3081 15.6425 15.8301 15.366C15.352 15.0894 15.1887 14.4776 15.4653 13.9996C15.8052 13.4122 16 12.7304 16 12C16 11.2696 15.8052 10.5878 15.4653 10.0004C15.1887 9.52237 15.352 8.91063 15.8301 8.63404ZM8.16995 8.63404C8.64798 8.91063 8.81129 9.52237 8.5347 10.0004C8.19484 10.5878 8 11.2696 8 12C8 12.7304 8.19484 13.4122 8.5347 13.9996C8.81129 14.4776 8.64798 15.0894 8.16995 15.366C7.69191 15.6425 7.08017 15.4792 6.80358 15.0012C6.29231 14.1176 6 13.0914 6 12C6 10.9086 6.29231 9.88244 6.80358 8.9988C7.08017 8.52076 7.69191 8.35745 8.16995 8.63404Z" fill="currentColor"></path><path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.33243 16.4826L5.09622 17.2728C4.86428 18.0487 4.62086 18.8707 4.41748 19.5825C5.12931 19.3791 5.95126 19.1357 6.72722 18.9038L7.51743 18.6676L8.24444 19.057C9.36447 19.6571 10.6412 20 12 20C16.4154 20 20 16.4154 20 12C20 7.58457 16.4154 4 12 4C7.58457 4 4 7.58457 4 12C4 13.3588 4.34295 14.6355 4.94296 15.7556L5.33243 16.4826ZM3.18 16.7C2.63 18.54 2 20.69 2 21C2 21.55 2.45 22 3 22C3.31 22 5.46 21.37 7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg></span>
                <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span>
              </div>
          </header>
          <div className='boxSearchChat'>
            <label name="search" className='boxSearchOptions'>
              <div className='showSearch'>
              <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>search</title><path fill="gray" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
              </div>
              <div className='goSearch'>
              <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>back</title><path fill="rgb(1,168,132)" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
              </div>
              <input name='search' placeholder='Buscar' type='text'/>
            </label>
            <div className='filterDontRead'>
            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" ><title>filter</title><path fill="rgb(119,134,144)" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path></svg>
            </div>
          </div>
          <div className='boxChatList'>


            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Gastos</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
                <div className='boxChatText'>
                  <div className='chatText'>
                    <p className='nameChatList'>Nombre a elegir</p>
                    <p className='textChatList'>Texto random que debo agregar</p>
                  </div>
                  <div className='hourShowMore'>
                    <p className='textHour'>22:52</p>
                    <span className='showOnlyHover'>
                        <svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>


            {/* <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/fotowspFake4.png' />
              </div>
              <div className='boxChatTextPreview'>
              <div className='boxChatText'>
                <div className='chatText'>
                  <p className='nameChatList'>Walter</p>
                  <p className='textChatList'>
                  <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    <span>No me sorprende del sinverguenza ese!</span>
                  </p>
                </div>
                <div className='hourShowMore'>
                  <p className='textHour'>22:52</p>
                  <span className='showOnlyHover'><svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg></span>
                </div>
              </div>
              <hr />
              </div>
            </div> */}

            {/* <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/wsp-chat.webp' />
              </div>
              <div className='boxChatTextPreview'>
              <div className='boxChatText'>
                <div className='chatText'>
                  <p className='nameChatList'>Sofi Albarracín</p>
                  <p className='textChatList'>
                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                    <span className='spanChat'> No vas a podes creer lo que me enteré sobre pablo de rolling!!</span>
                  </p>
                </div>
                <div className='hourShowMore'>
                  <p className='textHour'>22:52</p>
                  <span className='showOnlyHover'><svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg></span>
                </div>
              </div>
              <hr />
              </div>
            </div> */}

            {/* <div className='boxChatPreview'>
              <div className='pictureChat'>
                <img src='/images/fotowspFake5.png' />
              </div>
              <div className='boxChatTextPreview'>
              <div className='boxChatText'>
                <div className='chatText'>
                  <p className='nameChatList'>Pablo Marino</p>
                  <p className='textChatList'>Lo que te conté a nadie por favor!</p>
                </div>
                <div className='hourShowMore'>
                  <p className='textHour'>Miércoles</p>
                  <span className='showOnlyHover'><svg viewBox="0 0 30 30" height="22" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30"><title>chevron-right</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg></span>
                </div>
              </div>
              <hr />

              </div>
            </div> */}

            <footer className='footerLeftSide'>
            <span>
            <svg viewBox="0 0 10 12" height="12" width="10" preserveAspectRatio="xMidYMid meet" version="1.1"><title>lock-small</title><path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path></svg>
            </span>
              Tus mensajes personales están <span className='textHighlined'>cifrados de extremo a extremo</span>.
            </footer>

          </div>
        </article>



        <article className="boxRight">
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