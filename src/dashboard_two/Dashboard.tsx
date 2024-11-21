import React from 'react';
import styles from './styles/Dashboard.module.css';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { MetricCard } from './components/MetricCard';
import { CustomerTable } from './components/CustomerTable';

export const Dashboard_two: React.FC = () => {
  const customers = [
    {
      name: 'Jane Cooper',
      company: 'Microsoft',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'active' as const
    },
    {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'inactive' as const
    }
  ];

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      
      <main className={styles.mainContent}>
        <header className={styles.dashboardHeader}>
          <h1 className={styles.greeting}>Hello Evano 👋🏼,</h1>
          <form className={styles.searchForm}>
            <label htmlFor="mainSearch" className="sr-only">
              Search
            </label>
            <input
              id="mainSearch"
              type="search"
              placeholder="Search..."
              className={styles.searchInput}
            />
          </form>
        </header>

        <section className={styles.statsSection}>
          <StatCard
            icon="https://cdn.builder.io/api/v1/image/assets/315113f1f03b4ff2a19c7d36a40da083/ec5cae7011ce5ad7f2584e22fe383f0a91409836b57f3c17f7ac496d3933bca8?apiKey=315113f1f03b4ff2a19c7d36a40da083&"
            title="Total Customers"
            value="5,423"
            trend={{
              value: "16%",
              direction: "up",
              text: "this month"
            }}
          />
          <StatCard
            icon="https://cdn.builder.io/api/v1/image/assets/315113f1f03b4ff2a19c7d36a40da083/147c863b61da7d29dff15b32222125c4ed2c0ca2d9f3057a463b8bb9d2da9f37?apiKey=315113f1f03b4ff2a19c7d36a40da083&"
            title="Members"
            value="1,893"
            trend={{
              value: "1%",
              direction: "down",
              text: "this month"
            }}
          />
          <StatCard
            icon="https://cdn.builder.io/api/v1/image/assets/315113f1f03b4ff2a19c7d36a40da083/c9d2ad31c484ae88b36b2b13d1ac86a9fb4f8418a56aaac7a84acf16260f3afb?apiKey=315113f1f03b4ff2a19c7d36a40da083&"
            title="Active Now"
            value="189"
          />
        </section>

        <section className={styles.metricsSection}>
          <MetricCard
            title="Commandes en cours"
            value="125"
            change="+45%"
            changeType="positive"
            comparison="From 4.6%"
          />
          <MetricCard
            title="Client affilié actif"
            value="215"
            change="+45%"
            changeType="negative"
            comparison="From 4.6%"
          />
          <MetricCard
            title="Gains en cours"
            value="125 000fcfa"
          />
          <MetricCard
            title="Performance"
            value="12.67%"
            change="+45%"
            changeType="positive"
            comparison="From 4.6%"
          />
        </section>

        <CustomerTable customers={customers} />
      </main>
    </div>
  );
};