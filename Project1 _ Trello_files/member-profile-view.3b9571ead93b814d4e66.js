webpackJsonp([12],{"/yIy":function(t,e,i){var n,o,r={}.hasOwnProperty;n=i("D68d"),o=i("uh/o"),t.exports=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return function(t,e){for(var i in e)r.call(e,i)&&(t[i]=e[i]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,n),e.prototype.tagName="li",e.prototype.render=function(){var t;return(t=this.model.toJSON({prefs:!0,url:!0})).visIconClass=this.model.getPermLevel(),t.hasBusinessClass=this.model.isPremium(),this.$el.html(o.fill("organization_list_item",t)),this},e}()},E6BD:function(t,e,i){var n,o,r,a,s,l,c,d,p,u,h,m,f,b,g,v={}.hasOwnProperty;n=i("OoJc"),o=i("8Qn4"),r=i("sAoA"),s=i("MKaV"),u=i("TTkC"),l=i("EK8q"),c=i("KMFs"),d=i("389n"),p=i("D68d"),m=i("tYzK"),f=i("uh/o"),b=i("Hr0A"),g=i("q+vg"),h=i("m+By"),a=i("HH40"),t.exports=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return function(t,e){for(var i in e)v.call(e,i)&&(t[i]=e[i]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,p),m(c,e),e.prototype.initialize=function(){this.listenTo(this.model,"change:initials change:avatarHash change:avatarSource change:fullName change:username change:bio change:prefs change:paidAccount",this.render),this.listenTo(this.model,"change:initials change:fullName change:username change:bio",this.renderDetails)},e.prototype.events={"click .js-change-avatar-profile":"changeAvInProfile","click .js-edit-profile":"editProfile","click .js-submit-profile":"submitProfile","submit .js-profile-form":"submitProfile","click .js-cancel-edit-profile":"cancelEditProfile","click .tabbed-pane-nav-item-button:not(.active)":"switchSection"},e.prototype.delegateEvents=function(t){return e.__super__.delegateEvents.call(this,g(e.prototype.events,t||this.events))},e.prototype.render=function(){var t,e,i,r;return e=o.isMe(this.model),t=this.model.toJSON(),this.model.organizationList.models.length>0&&(t.showOrgs=!0),e&&(r=null!=(i=t.paidAccount)?i.standing:void 0,t.hasAccount=this.model.hasMemberOrOrgAccount(),t.accountProblem=n.isProblem(r),t.isMe=!0,t.upsellEnabled=!a.get("dontUpsell")),t.hasCrown=this.model.isFeatureEnabled("crown"),t.editable=e,this.$el.html(h(t)),this.renderDetails(),this.renderMainContent(),this},e.prototype.renderDetails=function(){var t,e;return e=o.isMe(this.model),(t=this.model.toJSON()).bioHtml=s.markdownAsHtml(t.bio,{textData:t.bioData}),t.hasCrown=this.model.isFeatureEnabled("crown"),this.$(".js-current-details").empty().append(f.fill("member_detail_profile_info",t,{editable:e})),e&&this.$(".js-profile-form").empty().append(f.fill("member_detail_profile_edit",t,{editable:e})),this},e.prototype.setActiveView=function(t){this.$(".tabbed-pane-nav-item-button").removeClass("active"),this.$(t).addClass("active")},e.prototype.changeAvInProfile=function(t){d.stop(t),b("Member View","Header","Change Avatar Menu"),l.toggle({elem:this.$(".js-change-avatar-profile"),view:new r({model:this.model,modelCache:this.modelCache})})},e.prototype.editProfile=function(t){d.stop(t),this.$(".js-current-details").addClass("hide"),this.$(".js-profile-form").removeClass("hide"),b("Member View","Click Edit Profile")},e.prototype.cancelEditProfile=function(t){d.stop(t),this.$(".js-current-details").removeClass("hide"),this.$(".js-profile-form").addClass("hide"),this.$(".js-profile-form")[0].reset()},e.prototype.submitProfile=function(t){var e,i,n,o,r;if(d.stop(t),!this.disabled){for(e={},n=0,o=(r=["fullName","username","bio","initials"]).length;n<o;n++)e[i=r[n]]=this.$(".js-profile-form [name="+i+"]").val();var a;e.initials=e.initials.toUpperCase(),this.disableSubmit(),this.model.update(e,{waitForServer:!0},(a=this,function(t){var e;a.disabled=!1,a.$(".js-submit-profile").removeAttr("disabled"),t?(e=t.message.trim().toLowerCase(),a.$(".js-profile-form-error").removeClass("hide").text(u(e))):(a.$(".js-profile-form-error").addClass("hide"),a.cancelEditProfile(),b("Member","Successfully Change User Info"))}))}},e.prototype.disableSubmit=function(){this.disabled=!0,this.$(".js-submit-profile").attr("disabled","disabled")},e}()},KMFs:function(t,e,i){var n;n=i("Hr0A"),t.exports=function(){function t(){}return t.prototype.switchSection=function(t){return this.$(".js-content").addClass("hide").detach(),this.$(".js-loading-page").removeClass("hide"),this.$(".tabbed-pane-nav-item-button").removeClass("active"),this.$(t.target).addClass("active"),n(this.model.typeName+" View","Tab Navigation","Open "+this.$(t.target)[0].getAttribute("data-tab")+" Page")},t}()},k7Vs:function(t,e,i){var n,o,r,a,s,l,c,d,p,u={}.hasOwnProperty;n=i("5Wjr"),o=i("gy7A"),r=i("E6BD"),a=i("u9ug"),s=i("6hb7"),l=i("SjW0"),c=i("tYzK"),d=i("uh/o"),p=i("Hr0A"),t.exports=c(l,function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return function(t,e){for(var i in e)u.call(e,i)&&(t[i]=e[i]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,r),e.prototype.events={"click .js-more-actions":"loadMoreActionsAndRemoveDateLimit"},e.prototype.initialize=function(){return e.__super__.initialize.apply(this,arguments),p("Member Profile Page","Open"),this.limit=10,this.nextPage=Math.floor(this.getActions().length/this.limit),this.daysBack=s.memberProfile_daysBack,this.actionListView=this.collectionSubview(o,new n(this.getActions(),{modelCache:this.modelCache}),{renderOpts:{context:this.model,showBoard:!0,showOrganization:!0,readOnly:!0}}),this.listenTo(this.model.organizationList,"add remove reset",this.frameDebounce(this.renderMainContent)),this.listenTo(this.modelCache,"add:Action:"+this.model.id,(t=this,function(){return t.actionListView.collection.reset(t.getActions(),{silent:!0}),t.renderActions()}));var t},e.prototype.renderMainContent=function(){var t,e;return t=this.model.toJSON(),this.setActiveView(".js-member-profile"),this.$(".js-content").html(d.fill("member_profile",t)),this.defer((e=this,function(){var t,i;return e.model.organizationList.length>0?(i=e.subview(a,e.model),t=e.$(".js-list-orgs").empty(),e.appendSubview(i,t)):e.$(".js-list-orgs").closest(".window-module").hide(),e.actionListView.setElement(e.$(".list-actions")[0]),e.renderActions()})),this},e.prototype.renderActions=function(){return 0===this.actionListView.collection.length?this.actionListView.$el.html(d.fill("actions_empty",{daysBack:this.daysBack})):this.actionListView.render(),this.$(".js-more-actions").toggleClass("hide",!this.hasMoreActionsOrDateLimited()),this},e.prototype.hasMoreActionsOrDateLimited=function(){return null!=this.daysBack||this.hasMoreActions()},e.prototype.loadMoreActionsAndRemoveDateLimit=function(){return this.daysBack=null,this.loadMoreActions()},e.prototype.getActionsFilter=function(){return s.memberActions},e}())},"m+By":function(t,e,i){var n;n=i("Dp8d")("member_detail"),t.exports=n.renderable(function(t){var e,i,o,r,a,s,l,c,d,p;return d=t.upsellEnabled,t.showOrgs,i=t.avatarHash,r=t.fullName,s=t.hasCrown,o=t.editable,l=t.initials,p=t.username,c=t.isMe,a=t.hasAccount,e=t.accountProblem,n.div(".tabbed-pane-header",function(){return n.div(".tabbed-pane-header-wrapper.u-clearfix",function(){return n.div(".tabbed-pane-header-content",function(){return n.a({class:n.classify({"tabbed-pane-header-image":!0,"profile-image":!0,"is-editable":o,"js-change-avatar-profile":o,"is-gold":s}),href:"#"},function(){return i?n.img(".profile-image-image",{src:[avatarDomain,i,"170.png"].join("/"),alt:r}):n.span(".profile-image-initials",function(){return n.text(l)}),n.span(".profile-image-change-text",function(){return n.format("change-avatar")})}),n.div(".tabbed-pane-header-details",function(){if(n.div(".js-current-details"),o)return n.form(".js-profile-form.hide")})})})}),n.div(".tabbed-pane-nav.u-clearfix",function(){return n.ul(function(){n.li(".tabbed-pane-nav-item",function(){return n.a(".tabbed-pane-nav-item-button.js-member-profile",{"data-tab":"profile",href:["",p].join("/")},function(){return n.format("profile")})}),n.li(".tabbed-pane-nav-item",function(){return n.a(".tabbed-pane-nav-item-button.js-member-cards",{"data-tab":"cards",href:["",p,"cards"].join("/")},function(){return n.format("cards")})}),c&&(n.li(".tabbed-pane-nav-item",function(){return n.a(".tabbed-pane-nav-item-button.js-member-account",{"data-tab":"settings",href:["",p,"account"].join("/")},function(){return n.format("settings")})}),d&&(e?n.li(".tabbed-pane-nav-item",function(){return n.a(".tabbed-pane-nav-item-button.js-billing",{"data-tab":"billing-issue",href:["",p,"billing"].join("/")},function(){return n.format("billing-issue")})}):a?n.li(".tabbed-pane-nav-item",function(){return n.a(".tabbed-pane-nav-item-button.js-billing",{"data-tab":"billing",href:["",p,"billing"].join("/")},function(){return n.format("billing")})}):n.li(".tabbed-pane-nav-item",function(){return n.a(".tabbed-pane-nav-item-button.js-billing",{"data-tab":"trello-gold",href:["",p,"billing"].join("/")},function(){return n.span(".icon-sm.icon-trello-gold.mod-inline.icon-trello-gold-color"),n.text(" "),n.format("trello-gold")})})))})}),n.div(".tabbed-pane-main-col.u-clearfix.mod-wider",function(){return n.div(".tabbed-pane-main-col-loading.hide.js-loading-page",function(){return n.span(".tabbed-pane-main-col-loading-spinner.spinner")}),n.div(".tabbed-pane-main-col-wrapper.js-content")})})},u9ug:function(t,e,i){var n,o,r={}.hasOwnProperty;i("n3C+"),n=i("/yIy"),o=i("D68d"),t.exports=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return function(t,e){for(var i in e)r.call(e,i)&&(t[i]=e[i]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,o),e.prototype.tagName="ul",e.prototype.className="org-list",e.prototype.initialize=function(t){this.listenTo(this.model.organizationList,{"add remove reset change:closed":this.frameDebounce(this.render)})},e.prototype.render=function(){var t,e;return this.$el.empty(),t=this.model.getSortedOrgs().map((e=this,function(t){return e.subview(n,t)})),this.appendSubviews(t),this},e}()}});
//# sourceMappingURL=member-profile-view.3b9571ead93b814d4e66.js.map