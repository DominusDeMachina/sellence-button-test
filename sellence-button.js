// Code snippet to add a floating action button to the bottom right of the page
// https://cdn.jsdelivr.net/gh/DominusDeMachina/sellence-button-test@main/sellence-button.js
(document.addEventListener('DOMContentLoaded', function () {
  // Load the Google Fonts asynchronously
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // Create the anchor tag for the SMS widget
  const anchor = document.createElement('a');
  anchor.id = 'send-sms';
  anchor.className = 'ba-we-love-subscribers-wrap';
  anchor.href = 'sms:+14158494349&body=';

  // Create the Text Us message div
  const textDiv = document.createElement('div');
  textDiv.className = 'send-sms-msg';
  textDiv.textContent = 'Text Us!';
  anchor.appendChild(textDiv);

  // Create the main FAB div
  const fabDiv = document.createElement('div');
  fabDiv.className = 'ba-we-love-subscribers-fab';

  // Create the wrap div
  const wrapDiv = document.createElement('div');
  wrapDiv.className = 'wrap';

  // Create the img-fab div
  const imgDiv = document.createElement('div');
  imgDiv.className = 'img-fab img';
  imgDiv.style.backgroundImage = "url('%3Csvg%20width%3D%22115%22%20height%3D%22146%22%20viewBox%3D%220%200%20115%20146%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20filter%3D%22url(%23filter0_dddd_768_114)%22%3E%3Crect%20x%3D%2234%22%20y%3D%226%22%20width%3D%2262%22%20height%3D%2262%22%20rx%3D%2231%22%20fill%3D%22%23737373%22%2F%3E%3Cpath%20d%3D%22M45.9233%2028.6538C45.9233%2024.0444%2049.66%2020.3077%2054.2694%2020.3077H75.731C80.3404%2020.3077%2084.0771%2024.0444%2084.0771%2028.6538V43.6614C84.0771%2046.9422%2081.4175%2049.6019%2078.1366%2049.6019H77.1932C75.556%2049.6019%2073.9878%2050.2618%2072.8433%2051.4325L69.4469%2054.9064C68.3701%2056.0079%2066.4996%2055.2454%2066.4996%2053.705C66.4996%2051.4389%2064.6626%2049.6019%2062.3965%2049.6019H54.2694C49.66%2049.6019%2045.9233%2045.8652%2045.9233%2041.2557V28.6538Z%22%20stroke%3D%22%23FAFAFA%22%20stroke-width%3D%222.38462%22%2F%3E%3Cpath%20d%3D%22M55.1729%2030.6903H65.0004%22%20stroke%3D%22%23FAFAFA%22%20stroke-width%3D%222.38462%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M55.1729%2038.61H74.2136%22%20stroke%3D%22%23FAFAFA%22%20stroke-width%3D%222.38462%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_dddd_768_114%22%20x%3D%220.615384%22%20y%3D%220.0384614%22%20width%3D%22114.462%22%20height%3D%22158.577%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%20dy%3D%223.57692%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%224.76923%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200.1%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_768_114%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%20dx%3D%22-2.38462%22%20dy%3D%2216.6923%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%228.34615%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200.09%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect1_dropShadow_768_114%22%20result%3D%22effect2_dropShadow_768_114%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%20dx%3D%22-4.76923%22%20dy%3D%2235.7692%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%2210.7308%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200.05%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect2_dropShadow_768_114%22%20result%3D%22effect3_dropShadow_768_114%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%20dx%3D%22-7.15385%22%20dy%3D%2264.3846%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%2213.1154%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200%200.564706%200%200%200%200.01%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22effect3_dropShadow_768_114%22%20result%3D%22effect4_dropShadow_768_114%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect4_dropShadow_768_114%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')";
  imgDiv.style.backgroundRepeat = 'no-repeat';

  // Append the img div to the wrap div
  wrapDiv.appendChild(imgDiv);

  // Append the wrap div to the FAB div
  fabDiv.appendChild(wrapDiv);

  // Append the FAB div to the anchor tag
  anchor.appendChild(fabDiv);

  // Append the anchor to the body of the document
  document.body.appendChild(anchor);

  // Add the necessary styles
  const style = document.createElement('style');
  style.textContent = `
        .ba-we-love-subscribers-fab {
            width: 65px;
            height: 65px;
            background-color: #093A3E;
            border-radius: 30px;
            float: right;
            box-shadow: 0px 12px 45px rgba(0, 0, 0, .3);
            z-index: 5;
            position: relative;
        }
        .ba-we-love-subscribers-fab .img-fab {
            height: 40px;
            width: 40px;
            margin: 15px auto;
            background-repeat: no-repeat;
        }
        .ba-we-love-subscribers-fab .wrap {
            transform: rotate(0deg);
            -webkit-transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
            transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
            cursor: pointer;
        }
        .ba-we-love-subscribers-wrap {
            position: fixed;
            right: 25px;
            bottom: 25px;
            z-index: 1000;
            text-decoration: none;
        }
        #send-sms:hover, #send-sms:link, #send-sms:visited, #send-sms:active, #send-sms:focus {
            text-decoration: none;
        }
        .send-sms-msg {
            font-family: 'Roboto', sans-serif;
            width: fit-content;
            height: 100%;
            padding: 10px;
            background-color: #093A3E;
            color: #FFFFFF;
            border-radius: 20px;
            margin-bottom: 8px;
            text-align: right;
            line-height: 1.5;
            text-decoration: none !important;
        }
    `;
  document.head.appendChild(style);
}))();

