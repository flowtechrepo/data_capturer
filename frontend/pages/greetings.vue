html(lang="vi-VN")
  head
    meta(charset="UTF-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    link(data-n-head="true" rel="icon" type="image/x-icon" href="https://www.flow-tech.ai/favicon.ico")
    title Flow xin chào quý Khách!
  style.
    body,div{
    margin: 0;
    padding: 0;
    font-family: "SegoeUISemiBold", sans-serif;
    }
    .header{
    background: #123C7D;
    width: 100%;
    height: 100px;
    }
    .mainContainer{
    width: 95%;
    height: 100%;
    margin: 0 auto;
    }
    .mainContainer .logo{
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    }
    .mainContainer .logo img{
    width: 200px;
    }
    .mainBox{
    width: 95%;
    height: 100vh;
    color: #123C7D;
    display: flex;
    }
    .mainBoxInner{
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 10vh;
    flex-direction: column;
    }
    .mainBoxInner .title{
    font-size: 36px;
    font-weight: bold;
    color: #123C7D;
    margin-bottom: 15px;
    }
    .mainBoxInner .subtitle{
    font-size: 21px;
    line-height: normal;
    font-weight: bold;
    color: #123C7D;
    margin-bottom: 35px;
    text-align: centre;
    }
    .mainBoxInner .hubspotform{
    width: 90%;
    }
    .mainBoxInner .tips{
    font-size: 21px;
    line-height: 36px;
    font-weight: bold;
    color: #123C7D;
    margin-bottom: 25px;
    text-align: left;
    }
    .mainBoxInner .flowBtn{
    width: 240px;
    background: #0d5fff;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    }
    .mainBoxInner .flowBtn img{
    height: 25px;
    }
  body
    script.
      function getUrlVars()
      {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
      hash = hashes[i].split('=');
      vars.push(decodeURIComponent(hash[0]));
      vars[hash[0]] = decodeURIComponent(hash[1]);
      }
      return vars;
      }
    .header
      .mainContainer
        .logo
          img(src="https://www.flow-tech.ai/blogs/assets/logo/logo-white.png" alt="")
    .mainBox
      .mainContainer
        .mainBoxInner
          .title
            | Hello
            script.
              if(getUrlVars()["name"] != null){document.write(getUrlVars()["name"])}else{document.write()}
            | , Flow xin chào quý Khách!
            br
          .subtitle
            | Kính chào Quý khách,
            br
            br
            |                         Flow (trước đây là AsiaCollect) kính chúc Quý khách sức khỏe và bình an trong đại dịch COVID-19.
            br
            br
            |                         Để hỗ trợ cho Quý khách trong việc giải quyết vấn đề tài chính, đặc biệt trong giai đoạn khó khăn này, Quý khách vui lòng để lại thông tin số điện thoại và nhân viên chúng tôi sẽ liên hệ lại trong thời gian ngắn nhất.
            br
            br
            |                         Quý khách cũng có thể liên hệ đường dây nóng của chúng tôi với số điện thoại: 090 1186 096.
            br
            br
            |                         Vui lòng điền thông tin:
          .hubspotform
            script(charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js")
            script.
              hbspt.forms.create({
              portalId: "4999318",
              formId: "79222dde-edb6-480c-87b5-6831fb8f3b59"
              });
          .subtitle
            br
            |                         Trân trọng cảm ơn,
            br
            |                         Flow
            br
    // Global site tag (gtag.js) - Google Analytics
    script(async="" src="https://www.googletagmanager.com/gtag/js?id=UA-38147287-1")
    script.
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-38147287-1');
