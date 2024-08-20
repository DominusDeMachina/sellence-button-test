// noinspection JSVoidFunctionReturnValueUsed,JSValidateTypes

(document.addEventListener('DOMContentLoaded', function () {
  // Load the Google Fonts asynchronously
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
  
  // Constants can be changed to customize the SMS widget
  const PHONE_NUMBER = '+14158494349';
  const MESSAGE = 'Text Us!';
  const TEXT_COLOR = '#FAFAFA';
  const BACKGROUND_COLOR = '#737373';

  // Create the anchor tag for the SMS widget
  const anchor = document.createElement('a');
  anchor.id = 'sellence-button';
  anchor.href = `sms:${PHONE_NUMBER}&body=`;

  // Create the button wrapper
  const buttonWrapper = document.createElement('div');
  buttonWrapper.id = 'wrap'

  // Create the button text
  const buttonText = document.createElement('span');
  buttonText.className = 'text'
  buttonText.textContent = MESSAGE;

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
  `;
  document.head.appendChild(style);
  document.body.appendChild(anchor);
}))();
