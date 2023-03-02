---
id: why
title: 为何要设计新架构
---

import NewArchitectureWarning from '../\_markdown-new-architecture-warning.mdx';

<NewArchitectureWarning/>

新架构的目标是解决困扰旧架构在性能和灵活性方面的一些问题。本节提供了基本的背景，以了解旧架构的局限性，以及如何通过新架构来克服这些局限性。

这不是一个技术上的深入研究：对于进一步的技术信息，请参考网站的[架构](/architecture/overview)标签。

## 旧架构的问题

旧的架构曾经通过使用一个叫做`桥（Bridge）`的组件将所有必须从 JS 层传递到本地层的数据序列化来工作。桥可以被想象成一条总线，生产者层为消费者层发送一些数据。消费者可以读取数据，将其反序列化并执行所需的操作。

桥有一些固有的限制：

- **它是异步的**：某个层将数据提交给桥，再异步地"等待"另一个层来处理它们，即使有时候这并不是真正必要的。
- **它是单线程的**：JS 是单线程的，因此发生在 JS 中的计算也必须在单线程上进行。
- **它带来了额外的开销**：每当一个层必须使用另一个层时，它就必须序列化一些数据。另一层则必须对其进行反序列化。这里选择的格式是 JSON，因为它的简单性和人的可读性，但尽管是轻量级的，它也是有开销的。

## 新架构的改进

新架构放弃了"桥"的概念，转而采用另一种通信机制：`JavaScript 接口（JSI）`。JSI 是一个接口，允许 JavaScript 对象持有对 C++ 的引用，反之亦然。

一旦一个对象拥有另一个对象的引用，它就可以直接调用该对象的方法。例如一个 C++ 对象现在可以直接调用一个 JavaScript 对象在 JavaScript 环境中执行一个方法，反之亦然。

这个想法可以带来几个好处：

- **同步执行**：现在可以同步执行那些本来就不应该是异步的函数。
- **并发**：可以在 JavaScript 中调用在不同线程上执行的函数。
- **更低的开销**：新架构不需要再对数据进行序列化/反序列化，因此可以避免序列化的开销。
- **代码共享**：通过引入 C++，现在有可能抽象出所有与平台无关的代码，并在平台之间轻松共享它。
- **类型安全**：为了确保 JS 可以正确调用 C++ 对象的方法，反之亦然，因此增加了一层自动生成的代码。这些代码必须通过 Flow 或 TypeScript 类型化的 JS 规范来生成。

这些优势是[TurboModule](pillars-turbomodules)系统的基础，也是进一步增强功能的跳板。例如，我们有可能开发出一种新的渲染器，它的速度更快，性能更强：[Fabric](/architecture/fabric-renderer)及其[Fabric 组件](pillars-fabric-components)。

## 进一步阅读

关于新架构的技术概述，请看[架构标签](/architecture/overview)。

关于新的 Fabric 渲染器的更多信息，请看[Fabric 部分](/architecture/fabric-renderer)。
