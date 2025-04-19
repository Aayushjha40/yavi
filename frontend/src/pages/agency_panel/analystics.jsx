import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Revenue Growth</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">+23.4%</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      vs last month
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">New Customers</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">156</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      +12% growth
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Average Order Value</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">$842</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      +5.2%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900">Monthly Revenue</h2>
        <div className="mt-6 h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500">Chart placeholder - Add your preferred charting library</p>
        </div>
      </div>
    </div>
  );
}