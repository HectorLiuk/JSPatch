require('UIColor, UIView')


defineClass('JPViewController', {
  handleBtn: function(sender) {
    var tableViewCtrl = JPTableViewController.alloc().init()
    self.navigationController().pushViewController_animated(tableViewCtrl, YES)
  }
})

defineClass('JPTableViewController : UITableViewController <UIAlertViewDelegate>', ['data'], {
  dataSource: function() {
    var data = self.data();
    if (data) return data;
    var data = [];
    for (var i = 0; i < 20; i ++) {
      data.push("cell from js " + i);
    }
    self.setData(data)
    return data;
  },
  numberOfSectionsInTableView: function(tableView) {
    return 1;
  },
  tableView_numberOfRowsInSection: function(tableView, section) {
    return self.dataSource().length;
  },
  tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
    var cell = tableView.dequeueReusableCellWithIdentifier("cell") 
    if (!cell) {
      cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(1, "cell")
    }
    cell.textLabel().setText(self.dataSource()[indexPath.row()])
    cell.detailTextLabel().setText(self.dataSource()[indexPath.row()])
    return cell
  },
  tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
    return 60
  },
  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
//     var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert",self.dataSource()[indexPath.row()], self, "OK",  null);
//     alertView.show()
    var customVC = CustomViewController.alloc().init()
    self.navigationController().pushViewController_animated(customVC,YES)
            
  },
//  alertView_willDismissWithButtonIndex: function(alertView, idx) {
//    console.log('click btn ' + alertView.buttonTitleAtIndex(idx).toJS())
//  }
})
defineClass('CustomViewController : UIViewController',['sonStr','girlStr'], {
    viewDidLoad: function() {
        self.super().viewDidLoad()

        self.view().setBackgroundColor(UIColor.whiteColor())
            
        var redView = UIView.alloc().initWithFrame({x:20, y:20, width:100, height:100})
        var red = UIColor.redColor()
        redView.setBackgroundColor(red)
            
        self.view().addSubview(redView)
            
            
            
        var 
    }
        
        
})

