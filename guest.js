const Actor = {
  name: "RajiniKanth",
  store: "Landmark"
}

const ActorTemplate = templater`<article>
  <h3>${'name'} is a Actor</h3>
  <p>You can find his movies at ${'store'}.</p>

</article>`;

function templater(strings, ...keys) {
  return function(data) {
  let temp = strings.slice();
  keys.forEach((key, i) => {
  temp[i] = temp[i] + data[key];
  });
  return temp.join('');
  }
};

const myTemplate = ActorTemplate(Actor);
console.log(myTemplate);
function showraw(strings, ...values) {
 console.log( strings );
 console.log( strings.raw );
}
showraw`Hello\nWorld`;
