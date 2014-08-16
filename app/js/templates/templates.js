define(['handlebars', 'templates/helpers/checked'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["../app/js/templates/question.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"list__item\">\n      <label for=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <input\n          type=\"radio\"\n          class=\"list__input\"\n          id=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n          name=\"choice\"\n          value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n          "
    + escapeExpression((helper = helpers.checked || (depth1 && depth1.checked),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), (depth1 && depth1.userAnswer), options) : helperMissing.call(depth0, "checked", (data == null || data === false ? data : data.index), (depth1 && depth1.userAnswer), options)))
    + ">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n      </label>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<h2>";
  if (helper = helpers.question) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.question); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n<ul>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.choices), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

return this["JST"];

});