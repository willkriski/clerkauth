"use client"
import { UserButton } from '@clerk/nextjs'
import { BarChart3, Users, DollarSign, ShoppingCart, CheckCircle } from 'lucide-react'

export default function Dashboard() {
  const metrics = [
    { name: 'Total Revenue', value: '$45,231', icon: DollarSign, change: '+20.1%', trend: 'up' },
    { name: 'Active Users', value: '2,345', icon: Users, change: '+15.3%', trend: 'up' },
    { name: 'Sales', value: '1,234', icon: ShoppingCart, change: '-5.4%', trend: 'down' },
    { name: 'Conversion Rate', value: '2.5%', icon: BarChart3, change: '+4.2%', trend: 'up' },
  ]

  const activities = [
    { id: 1, user: 'John Doe', action: 'made a purchase', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'signed up', time: '4 hours ago' },
    { id: 3, user: 'Bob Johnson', action: 'left a review', time: '1 day ago' },
  ]

  const tasks = [
    { id: 1, title: 'Review new user signups', completed: false },
    { id: 2, title: 'Prepare monthly report', completed: false },
    { id: 3, title: 'Update product descriptions', completed: true },
    { id: 4, title: 'Respond to customer inquiries', completed: false },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <UserButton />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <metric.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{metric.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{metric.value}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className={`bg-${metric.trend === 'up' ? 'green' : 'red'}-100 px-5 py-3`}>
                <div className="text-sm">
                  <span className={`font-medium text-${metric.trend === 'up' ? 'green' : 'red'}-800`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              {activities.map((activity) => (
                <li key={activity.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Tasks</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              {tasks.map((task) => (
                <li key={task.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      checked={task.completed}
                      readOnly
                    />
                    <div className="ml-3 min-w-0 flex-1">
                      <p className={`text-sm font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                        {task.title}
                      </p>
                    </div>
                    {task.completed && (
                      <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
