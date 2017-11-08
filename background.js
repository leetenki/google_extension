(function(){

  // tab がアップデートされたとき
  chrome.tabs.onUpdated.addListener(function(tabId){
      // ページアクションを出す
      chrome.pageAction.show(tabId);
  })

  // ページアクションアイコンをクリックしたときの挙動
  chrome.pageAction.onClicked.addListener(function(tab){
    chrome.tabs.insertCSS(tab.id, { file:"style.css" });
    chrome.tabs.executeScript(null,{ file: "jquery-1.11.3.min.js"},
           function(){
               chrome.windows.create({
                   url: 'https://github.dena.jp/pages/tianqi-li/tianqi-li.github.io/aws_p3.html', 
                   type: 'popup',
                   state: 'fullscreen'
               });
          });
    });

})();

