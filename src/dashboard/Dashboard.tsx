import React from 'react';
import styles from './Dashboard.module.css';
import { MetricCard } from './components/statCard';
import { SearchBar } from './components/SearchBar';
import { CustomerTable } from './components/CustomerTableProps';
import { Pagination } from './components/Pagination';
import { CustomerData } from './types';

const mockCustomers: CustomerData[] = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'active'
  },
  // ... other customer data
];

export const Dashboard: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log('Search:', value);
  };

  const handlePageChange = (page: number) => {
    console.log('Page changed:', page);
  };

  return (
    <main className={styles.dashboard}>
      <header className={styles.dashboardHeader}>
        <h1>Hello Evano 👋🏼</h1>
        <SearchBar placeholder="Search..." onSearch={handleSearch} />
      </header>

      <section className={styles.metricsGrid}>
        <MetricCard
          title="Total Customers"
          value="5,423"
          percentageChange="+16%"
          isPositive={true}
          fromValue="4.6%"
        />
        <MetricCard
          title="Members"
          value="1,893"
          percentageChange="-1%"
          isPositive={false}
          fromValue="4.6%"
        />
        <MetricCard
          title="Active Now"
          value="189"
          percentageChange="+45%"
          isPositive={true}
        />
      </section>

      <CustomerTable customers={mockCustomers} />
      
      <footer className={styles.dashboardFooter}>
        <p>Showing data 1 to 8 of 256K entries</p>
        <Pagination
          currentPage={1}
          totalPages={40}
          onPageChange={handlePageChange}
        />
      </footer>
    </main>
  );
};