// page list config
import element from '@/pages/selector/element'
import relation from '@/pages/selector/relation'
import attribute from '@/pages/selector/attribute'
import position from '@/pages/layout/position'

const pageList = {
    selector: {
        title: '选择器篇',
        name: 'selector',
        subpages: {
            element: {
                title: '元素选择器',
                name: 'element',
                component: element
            },
            relation: {
                title: '关系选择器',
                name: 'relation',
                component: relation
            },
            attribute: {
                title: '属性选择器',
                name: 'attribute',
                component: attribute
            }
        }
    },
    layout: {
        title: '定位布局篇',
        name: 'layout',
        subpages: {
            position: {
                title: '定位',
                name: 'position',
                component: position
            }
        }
    }
};

export default pageList;