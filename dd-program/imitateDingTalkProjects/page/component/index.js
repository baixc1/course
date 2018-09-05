Page({
  data: {
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '/image/view.png',
          title: '视图容器',
          entitle: 'View',
          subs: [
            {
              title: '基础视图',
              entitle: 'View',
              page: 'view',
            },
            {
              title: '滚动视图',
              entitle: 'ScrollView',
              page: 'scroll-view',
            },
            {
              title: '滑动视图',
              entitle: 'Swiper',
              page: 'swiper',
            },
          ],
        }, {
          icon: '/image/basic.png',
          title: '基础内容',
          entitle: 'Basic Content',
          subs: [
            {
              title: '文字',
              entitle: 'Text',
              page: 'text',
            },
            {
              title: '图标',
              entitle: 'Icon',
              page: 'icon',
            },
            {
              title: '进度条',
              entitle: 'Progress',
              page: 'progress',
            },
          ],
        }, {
          icon: '/image/form.png',
          title: '表单组件',
          entitle: 'Form',
          subs: [
            {
              title: '按钮',
              entitle: 'Button',
              page: 'button',
            },
            {
              title: '复选框',
              entitle: 'Checkbox',
              page: 'checkbox',
            },
            {
              title: '表单',
              entitle: 'Form',
              page: 'form',
            },
            {
              title: '文本输入',
              entitle: 'Input',
              page: 'input',
            },
            {
              title: '标签',
              entitle: 'Label',
              page: 'label',
            },
            {
              title: '选择器视图',
              entitle: 'PickerView',
              page: 'picker-view',
            },
            {
              title: '选择器',
              entitle: 'Picker',
              page: 'picker',
            },
            {
              title: '单选框',
              entitle: 'Radio',
              page: 'radio',
            },
            {
              title: '滑动条',
              entitle: 'Slider',
              page: 'slider',
            },
            {
              title: '开关',
              entitle: 'Switch',
              page: 'switch',
            },
            {
              title: '多行输入',
              entitle: 'Textarea',
              page: 'textarea',
            },
          ],
        }, {
          icon: '/image/feedback.png',
          title: '操作反馈',
          entitle: 'Feedback',
          subs: [
            {
              title: '动作面板',
              entitle: 'ActionSheet',
              page: 'action-sheet',
            },
            {
              title: '对话框',
              entitle: 'Modal',
              page: 'modal',
            },
            {
              title: '轻提示',
              entitle: 'Toast',
              page: 'toast',
            },
            {
              title: '加载提示',
              entitle: 'Loading',
              page: 'loading',
            },
          ],
        }, {
          icon: '/image/navigator.png',
          title: '导航',
          entitle: 'Navigator',
          page: 'navigator',
        }, {
          icon: '/image/media.png',
          title: '媒体组件',
          entitle: 'Media', page: 'image',
        }, 
      ],
    },
  }
});
