
![alt EVENT](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e969caa9fc647cf8985c4c841a01f60~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

JSX 上写的事件并没有绑定在对应的真实 DOM上，而是通过事件代理的方式，将所有的事件都统一绑定在了 document 上。另外冒泡到 document 上的事件也不是原生浏览器事件，而是 React自己实现的合成事件（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用event.stopPropagation 是无效的，而应该调用 event.preventDefault.

- preventDefault(): Prevents the default browser action for the event.
- stopPropagation(): Stops the event propagation through the React tree.