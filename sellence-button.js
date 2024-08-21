// noinspection JSVoidFunctionReturnValueUsed,JSValidateTypes

(document.addEventListener('DOMContentLoaded', function () {
  // Check if the device is mobile
  let a = '';
  function detectDevice() {
    let ch = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetch|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return ch
  }
  const isMobile = detectDevice();
  alert(isMobile)
  // Load the Google Fonts asynchronously
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
  
  //Load QR code library
  const qrScript = document.createElement('script');
  qrScript.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
  document.head.appendChild(qrScript);

  // Constants can be changed to customize the SMS widget
  const PHONE_NUMBER = '+14158494349';
  const MESSAGE_BODY = '';
  const BUTTON_TEXT = 'Text Us!';
  const TEXT_COLOR = '#FAFAFA';
  const BACKGROUND_COLOR = '#737373';
  
  // Create QR code wrapper
  const qrWrapper = document.createElement('div');
  qrWrapper.className = 'qr-code-wrapper';
  const qrCodeHeaderContainer = document.createElement('div');
  qrCodeHeaderContainer.className = 'qr-code-header-container';
  qrCodeHeaderContainer.textContent = 'Scan the QR code to text us';
  const qrCodeContainer = document.createElement('div');
  qrCodeContainer.className = 'qr-code';
  const qrCodeView = document.createElement('div');
  qrCodeView.className = 'qr-code-view';
  qrCodeContainer.appendChild(qrCodeView);
  qrWrapper.appendChild(qrCodeHeaderContainer);
  qrWrapper.appendChild(qrCodeContainer);
  document.body.appendChild(qrWrapper);

  // Create the anchor tag for the SMS widget
  const anchor = document.createElement('a');
  anchor.id = 'sellence-button';
  anchor.href = isMobile ? `sms:${PHONE_NUMBER}&body=${MESSAGE_BODY}` : "#";
  anchor.addEventListener('click', function () {
    if (!isMobile) {
      let qr = null;
      const buttonComponent = document.querySelector('#sellence-button');
      buttonComponent.style.display = 'none';
      const qrWrapperComponent = document.querySelector('.qr-code-wrapper');
      qrWrapperComponent.style.display = 'flex';
      qrWrapperComponent.addEventListener('click', function () {
        qrWrapperComponent.style.display = 'none';
        buttonComponent.style.display = 'flex';
        qr?.clean()
      })
      
      // Generate QR code
      const qrCodeViewComponent = document.querySelector('.qr-code-view');
      qrCodeViewComponent.innerHTML = '';
      qr = new QRCode(document.querySelector('.qr-code-view'), {
        text: `sms:${PHONE_NUMBER}&body=`,
        width: 225,
        height: 225,
        colorDark: BACKGROUND_COLOR,
        colorLight: TEXT_COLOR,
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
  }
  );

  // Create the button wrapper
  const buttonWrapper = document.createElement('div');
  buttonWrapper.id = 'wrap'

  // Create the button text
  const buttonText = document.createElement('span');
  buttonText.className = 'text'
  buttonText.textContent = BUTTON_TEXT;

  // Create the button icon
  const svgNS = "http://www.w3.org/2000/svg";
  const buttonIcon = document.createElementNS(svgNS, 'svg');
  buttonIcon.setAttribute("width", "44");
  buttonIcon.setAttribute("height", "46");
  buttonIcon.setAttribute("viewBox", "0 0 44 46");
  buttonIcon.setAttribute("fill", "none");

  const path1 = document.createElementNS(svgNS, 'path');
  path1.setAttribute("d", "M2.92302 13.6538C2.92302 9.04436 6.65972 5.30766 11.2692 5.30766H32.7307C37.3402 5.30766 41.0769 9.04437 41.0769 13.6538V28.6614C41.0769 31.9422 38.4172 34.6019 35.1364 34.6019H34.193C32.5557 34.6019 30.9876 35.2618 29.843 36.4325L26.4467 39.9064C25.3698 41.0079 23.4994 40.2454 23.4994 38.705C23.4994 36.4389 21.6623 34.6019 19.3962 34.6019H11.2692C6.65972 34.6019 2.92302 30.8652 2.92302 26.2557V13.6538Z")
  path1.setAttribute("stroke", TEXT_COLOR)
  path1.setAttribute("stroke-width", "2.38462")

  const path2 = document.createElementNS(svgNS, 'path');
  path2.setAttribute("d", "M12.1724 15.6903H21.9999")
  path2.setAttribute("stroke", TEXT_COLOR)
  path2.setAttribute("stroke-width", "2.38462")
  path2.setAttribute("stroke-linecap", "round")

  const path3 = document.createElementNS(svgNS, 'path');
  path3.setAttribute("d", "M12.1724 23.61H31.2132")
  path3.setAttribute("stroke", TEXT_COLOR)
  path3.setAttribute("stroke-width", "2.38462")
  path3.setAttribute("stroke-linecap", "round")

  // Build widget
  buttonIcon.appendChild(path1);
  buttonIcon.appendChild(path2);
  buttonIcon.appendChild(path3);

  buttonWrapper.appendChild(buttonText);
  buttonWrapper.appendChild(buttonIcon);

  anchor.appendChild(buttonWrapper);

  const style = document.createElement('style');
  style.textContent = `
    #sellence-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        text-decoration: none;
    }
    #wrap {
        width: 60px;
        height: 60px;
        background-color: ${BACKGROUND_COLOR};
        border-radius: 30px;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        transition: 300ms;
    }
    #wrap .text {
        color: ${TEXT_COLOR};
        font-size: 1.8em;
        display: none;
        font-family: 'Roboto', sans-serif;
    }
    #wrap:hover {
        width: auto;
        padding: 0 20px;
        gap: 10px;
    }
    #wrap:hover .text {
        display: inline;
    }
    .qr-code-wrapper {
        height: 311px;
        width: 329px;
        position: fixed;
        display: none;
        flex-direction: column;
        bottom: 20px;
        right: 20px;
        border-radius: 50px;
        border: 2px solid ${BACKGROUND_COLOR};
    }
    .qr-code-header-container {
        background-color: ${BACKGROUND_COLOR};
        color: ${TEXT_COLOR};
        padding: 10px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .qr-code {
      background-color: ${TEXT_COLOR};
      flex: 1;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      display: flex;
      align-items: center;
      align-content: center;
    }
    .qr-code-view {
        margin: auto;
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(anchor);
}))();



