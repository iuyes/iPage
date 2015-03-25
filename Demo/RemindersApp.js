// 容器视图
var PageView = function() {
	var self = this;
	var children = [];

	self.setItemData = function(data) {
		// 加工处理数据, 计算也好, 转换也好, 格式化也好
		return self.draw(data);
	};

	self.addChild = function(childView) {
		children.push(childView);
		return self;
	};

	self.draw = function(data) {
		for (var i = 0; i < children.length; i++) {
			children[i].draw(itemData);
		};
		return self;
	};

	return self;
};

// 子容器视图
var ChildView = function(domID) {
	var self = this;

	var dom = document.getElementById(domID);

	self.draw = function(data) {
		if (dom) {
			// 把数据写入dom
		};
	};

	return self;
};

// 调用代码
var pv = new PageView();

var cv = new ChildView("td1");
pv.addChild(cv);

cv = new ChildView("td2");
pv.addChild(cv);

cv = new ChildView("td3");
pv.addChild(cv);

// 收集用户输入的数据
var remindersItem = {
	ID: 0,
	Content: "早上给邻座的小姑娘带早饭",
	TimeStamp: "07:15"
};

// 将数据绘制到视图上
pv.setItemData(remindersItem);
