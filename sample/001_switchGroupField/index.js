(function() {
  'use strict';

  var events = [
    'app.record.detail.show',
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.create.change.radioButton',
    'app.record.edit.change.radioButton'];

  kintone.events.on(events, function(e) {
    var record = e.record;
    var radioButtonValue = record.radioButton.value;

    kintone.app.record.setGroupFieldOpen('group_failure', false);
    kintone.app.record.setGroupFieldOpen('group_demand', false);
    kintone.app.record.setGroupFieldOpen('group_question', false);
    kintone.app.record.setGroupFieldOpen('group_other', false);

    switch (radioButtonValue) {
      case '不具合':
        kintone.app.record.setGroupFieldOpen('group_failure', true);
        break;
      case '要望':
        kintone.app.record.setGroupFieldOpen('group_demand', true);
        break;
      case '質問':
        kintone.app.record.setGroupFieldOpen('group_question', true);
        break;
      case 'その他':
        kintone.app.record.setGroupFieldOpen('group_other', true);
        break;
    }
  });
})();
