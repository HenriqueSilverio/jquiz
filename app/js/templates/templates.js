define(['handlebars', 'templates/helpers/helpers'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["question"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"list__item "
    + escapeExpression((helper = helpers.checked || (depth1 && depth1.checked),options={hash:{},data:data},helper ? helper.call(depth0, "is-active", (data == null || data === false ? data : data.index), (depth1 && depth1.userAnswer), options) : helperMissing.call(depth0, "checked", "is-active", (data == null || data === false ? data : data.index), (depth1 && depth1.userAnswer), options)))
    + "\">\n      <label for=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input\n          type=\"radio\"\n          class=\"list__input\"\n          id=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n          name=\"choice\"\n          value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n          "
    + escapeExpression((helper = helpers.checked || (depth1 && depth1.checked),options={hash:{},data:data},helper ? helper.call(depth0, "", (data == null || data === false ? data : data.index), (depth1 && depth1.userAnswer), options) : helperMissing.call(depth0, "checked", "", (data == null || data === false ? data : data.index), (depth1 && depth1.userAnswer), options)))
    + ">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n      </label>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<h2>";
  if (helper = helpers.question) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.question); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n<ul class=\"list\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.choices), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["quiz"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!--\n<div id=\"quiz-app\"></div>\n\n<div id=\"controls\">\n  <button id=\"go-prev\">Prev</button>\n  <button id=\"go-next\">Next</button>\n</div>\n-->\n\n<main class=\"container\">\n    <span class=\"label\">Vamos começar!</span>\n\n    <header id=\"quiz-header\" class=\"header\">\n        <h1 class=\"title-secondary\">Teste de Matemática I</h1>\n        <p class=\"description\">Algumas perguntas conceituais para você testar seus conhecimentos em matemática.</p>\n    </header>\n\n    <div id=\"quiz-app\" class=\"content\"></div>\n\n    <footer id=\"controls\" class=\"footer margin-top-lg clear\">\n      <button id=\"go-init\" class=\"btn\">Começar teste</button>\n      <button id=\"go-prev\" class=\"btn p-left is-hidden\">Voltar</button>\n      <button id=\"go-next\" class=\"btn p-right is-hidden\">Avançar</button>\n    </footer>\n</main>\n";
  });

return this["JST"];

});