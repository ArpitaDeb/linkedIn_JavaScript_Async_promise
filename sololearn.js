<p id='txt' onclick='test();'>20</p>
<script>
function test() {
  var x=document.getElementById('txt');
  var n = x.innerHTML;
  x.innerHTML = n/2;
}
</script>