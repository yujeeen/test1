Методы жизненного цикла

Жизненный цикл включает 4 фазы:

1 - Инициализация (initialization)
state/props - constructor

2 - Монтирование (mounting)
render() - отображается в первый раз. Может происходить много раз

componentWillMount() ------
componentDidMount() ++++++

3 - Обноление (updating)
Изменение состояния, повторный рендеринг

shouldComponentUpdate() -----
componentWillUpdate() -------
componentDidUpdate() --------

4 - Размонтирование (unmounting)
Отключение от DOM

componentWillUnmount() +++++++

* +++++ - изучим в этом модуле
** ---- - не изучим в этом модуле