var dom = new Proxy({}, {
    get(target, property) {
        return (attrs = {}, ...children) => {
            const el = document.createElement(property);

            for (let prop of Object.keys(attrs)) {
                el.setAttribute(prop, attrs[prop])
            }

            for (let child of children) {
                if (typeof child == 'string') {
                    child = document.createTextNode(child)
                }
                el.appendChild(child)
            }

            return el;
        }
    }
})

var el = dom.div({ id: '#' },
    'hi',
    dom.a({ href: 'www' }, 'link'),
    dom.ul({},
        dom.li({}, '1'),
        dom.li({}, '3'),
        dom.li({}, '2'),
    )
)

console.log(el)