import { useSelector } from 'react-redux';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

const AdminDashboard = () => {
  const users = useSelector(state => state.auth.users);
  const policies = useSelector(state => state.policy.policies);

  const userStats = [
    { name: 'Total Users', count: users.length },
    { name: 'Admins', count: users.filter(user => user.role === 'admin').length },
    { name: 'Customers', count: users.filter(user => user.role === 'user').length },
  ];

  const policyStats = policies.map(policy => ({
    name: policy.name,
    count: Math.floor(Math.random() * 50) + 1,  // Random purchase data for demonstration
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* User Stats Bar Chart */}
        <Card>
          <CardContent>
            <h4 className="text-center mb-4">User Statistics</h4>
            <BarChart width={400} height={300} data={userStats}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </CardContent>
        </Card>

        {/* Policy Sales Pie Chart */}
        <Card>
          <CardContent>
            <h4 className="text-center mb-4">Policy Sales</h4>
            <PieChart width={400} height={300}>
              <Pie data={policyStats} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
                {policyStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
