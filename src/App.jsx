import { useDispatch, useSelector } from "react-redux"
import { TodoInput, TodoList } from "./components"
import { clearTodo } from './redux/TodoSlice'

function App() {
  const dispatch = useDispatch()
  const TotalTodo = useSelector(state => state.todos)
  const todos = useSelector((state) => state.todos);


  return (
    <>

      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen ">
        <div className="container mx-auto p-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
            <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">My Todo List</h1>

            <TodoInput />
            {todos.map((todo)=>(
              <TodoList key={todo.id} todo={todo}/>
            ))}

            <div className="mt-8 pt-4 border-t border-indigo-100 text-sm text-indigo-600 flex justify-between items-center">
              <p className="font-medium">{TotalTodo.length} tasks remaining</p>
              <button onClick={() => dispatch(clearTodo())}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition duration-300 text-xs font-medium">Clear
                Completed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
