const Request = function (url) {
  this.url = url
}

Request.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.addEventListener('load', function() {
    if(this.status !== 200){
      console.err(xhr.status);
      return;
    }
    const data = JSON.parse(xhr.responseText);
    onComplete(data);
  });
  xhr.send();
};

module.exports = Request;
