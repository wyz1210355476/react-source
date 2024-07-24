# 任务调度
在react的fiber架构下，基于用户体验，不同的任务会分配不同的优先级,故而优先级高的任务会优先执行。

## 任务池

为了存储任务，React中定义了两个任务池，源码如下：

```ts{4}
// Tasks are stored on a min heap
var taskQueue = [];
var timerQueue = [];
```
taskQueue存储的是立即执行的任务，timerQueue存储的是延迟执行的任务。

**源码中的任务结构定义**
```ts{4}
 var newTask = {
    id: taskIdCounter++,
    callback,
    priorityLevel,
    startTime,
    expirationTime,
    sortIndex: -1,
  };
```

## 任务调度
我们看到，任务池中的任务是用数组存储的，那么当执行任务时如何取出优先级最高的任务呢？有同学可能会说对数组进行排序进而取出优先级最高的任务，然而排序的时间复杂度最快的也是O(nlogn)，那么有没有更好的办法呢？答案是肯定的，那就是最小堆。

