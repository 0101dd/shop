(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{b789:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cart"}},[a("b-container",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"text-center"},[t._v("購物車")])]),a("b-col",{attrs:{cols:"12"}},[a("b-table",{attrs:{items:t.cart,fields:t.fields,striped:"",hover:""},scopedSlots:t._u([{key:"cell(image)",fn:function(t){return[a("img",{attrs:{src:t.value,width:"50"}})]}},{key:"cell(action)",fn:function(e){return[a("b-btn",{attrs:{variant:"danger"},on:{click:function(a){return t.delCart(e.item.id)}}},[a("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)]}}])})],1)],1)],1)],1)},n=[],l={data:function(){return{fields:[{key:"id",label:"商品編號",sortable:!0},{key:"image",label:"圖片"},{key:"name",label:"名稱",sortable:!0},{key:"price",label:"單價",sortable:!0},{key:"count",label:"數量",sortable:!0},{key:"action",label:"動作"}]}},computed:{cart:function(){return this.$store.state.cart}},methods:{delCart:function(t){this.$store.commit("delCart",t),this.$swal({icon:"success",title:"成功",text:"成功刪除"})}}},s=l,c=a("2877"),i=Object(c["a"])(s,r,n,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=cart.69746bf7.js.map