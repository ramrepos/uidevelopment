#   UI Development Demo

GitHub repos: `git clone https://github.com/ramrepos/uidevelopment.git uidevelopment`
Note: If you are cloning within the company network, then configure proxy as follows:
`git config --global http.proxy www-proxy-idc.in.oracle.com:80`

After cloning, open the clone in NetBeans and run index.html to see the application in action.  Do the same after doing a `git checkout <branchname>` for each of the following branches that correspond to a unit in this demo.
Branches:
+   ## [master](https://github.com/ramrepos/uidevelopment/tree/master)
	+   JavaScript is the programming language of the web; that enables dynamic user interface 
+   ## [unit1.0_javascript_inline](https://github.com/ramrepos/uidevelopment/tree/unit1.0_javascript_inline)
    +   Logic and UI within html file is not a good idea from maintenance stand point
+   ## [unit1.1_javascript_include](https://github.com/ramrepos/uidevelopment/tree/unit1.1_javascript_include)
	+   Separating concern is good; by having the logic inside separate JS files and including the same in HTML
+   ## [unit1.2_javascript_namespace](https://github.com/ramrepos/uidevelopment/tree/unit1.2_javascript_namespace)
	+   Inline JS/Included JS files should not pollute global namespace (a.k.a. scope).  Meaning, the variables and functions declared within the included JS files run the risk of getting overwritten if not properly scoped.
+   ## [unit2_requirejs](https://github.com/ramrepos/uidevelopment/tree/unit2_requirejs)
	+   Define order of loading using [require.js](http://requirejs.org/)
+   ## [unit2.1_requirejs_module_definition](https://github.com/ramrepos/uidevelopment/tree/unit2.1_requirejs_module_definition)
	+   Modularity avoids polluting global namespace and improves robustness of our codebase; [require.js](http://requirejs.org/) is a library that enables us to write modular JS applications
+   ## [unit3_knockoutjs](https://github.com/ramrepos/uidevelopment/tree/unit3_knockoutjs)
	+   2-way data binding involves 
		+   Updating UI when model changes
		+   Updating model with user input
	+   Performing this by hand is tedious and error prone.  [Knockout.js](http://knockoutjs.com/) handles this for us.
	+   Useful links
		+   [Interactive Tutorial](http://learn.knockoutjs.com/)
		+   [Tips](http://www.knockmeout.net/2011/06/10-things-to-know-about-knockoutjs-on.html)
+   ## [unit4_ojet](https://github.com/ramrepos/uidevelopment/tree/unit4_ojet)
	+   Oracle JET – is a collection of JS libraries viz., knockout, require and jQuery.  It has OOB support for various UI controls such as visualization, navigation etc.
	+   Useful links
	    +   [Home](http://jet.us.oracle.com/2.2.0/)
	    +   [Online course](https://apexapps.oracle.com/pls/apex/f?p=44785:141:11968679110628::NO::P141_PAGE_ID,P141_SECTION_ID,P141_PREV_PAGE,P141_EVENT_ID:495,3581,2,)
	    +   [Cookbook](http://jet.us.oracle.com/2.2.0/jetCookbook.html)	    
	
+   ## [unit5_router_ajax_pubsub](https://github.com/ramrepos/uidevelopment/tree/unit5_router_ajax_pubsub)
	+   Routers enable SPA ([Single-Page Application](https://en.wikipedia.org/wiki/Single-page_application)) development. Routers manipulate browser history to achieve the same.
	+   Upon clicking navigation items such as tabs, links in nav pane - routers update the browser history (URL), loads the modules based on the updated URL (router state) without refreshing the entire page.   This makes for a seamless user experience. Entire application feels like a single page, when in fact, there are multiple JS modules that are loaded in place without page refresh.  This renders the application its single page behavior.
	+   Data, for individual modules and components within the modules, is typically fetched from REST endpoints using AJAX requests.
