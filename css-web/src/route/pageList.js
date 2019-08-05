// page list config
import element from '@/pages/selector/element'
import relation from '@/pages/selector/relation'
import attribute from '@/pages/selector/attribute'
import pseudoClasses from '@/pages/selector/pseudoClasses'
import pseudoElement from '@/pages/selector/pseudoElement'
import position from '@/pages/layout/position'
import layout from '@/pages/layout/layout'

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
            },
            pseudoClasses: {
                title: '伪类选择器',
                name: 'pseudoClasses',
                component: pseudoClasses
            },
            pseudoElement: {
                title: '伪对象选择器',
                name: 'pseudoElement',
                component: pseudoElement
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
            },
            layout: {
                title: '布局',
                name: 'layout',
                component: layout
            }
        }
    }
};

export default pageList;