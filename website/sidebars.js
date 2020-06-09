module.exports = {
  docs: {
    Introduction: ["docs/introduction"],
    "Supported Databases": [
      "docs/supported-databases",
      "docs/supported-databases/profile-postgres",
      "docs/supported-databases/profile-redshift",
      "docs/supported-databases/profile-snowflake",
      "docs/supported-databases/profile-bigquery",
      "docs/supported-databases/profile-presto",
      "docs/supported-databases/profile-spark",
      "docs/supported-databases/profile-mssql",
      //"docs/introduction/supported-databases/redshift-v2"
    ],
    "Building a dbt Project": [
      "docs/building-a-dbt-project/projects",
      {
        type: "category",
        label: "Models",
        items: [
          "docs/building-a-dbt-project/building-models",
          "docs/building-a-dbt-project/building-models/materializations",
          "docs/building-a-dbt-project/building-models/configuring-incremental-models",
          "docs/building-a-dbt-project/building-models/using-custom-aliases",
          "docs/building-a-dbt-project/building-models/using-custom-schemas",
          "docs/building-a-dbt-project/building-models/using-custom-database",
          "docs/building-a-dbt-project/building-models/using-variables",
        ],
      },
      "docs/building-a-dbt-project/tests",
      "docs/building-a-dbt-project/documentation",
      "docs/building-a-dbt-project/using-sources",
      "docs/building-a-dbt-project/seeds",
      "docs/building-a-dbt-project/hooks",
      "docs/building-a-dbt-project/snapshots",
      "docs/building-a-dbt-project/analyses",
      //"docs/building-a-dbt-project/dont-nest-your-curlies",
      //"docs/building-a-dbt-project/archival",
      "docs/building-a-dbt-project/using-operations",
      "docs/building-a-dbt-project/package-management",
    ],
    "Writing Code in dbt": [
      "docs/writing-code-in-dbt/getting-started-with-jinja",
      "docs/writing-code-in-dbt/using-jinja",
      "docs/writing-code-in-dbt/macros",
      {
        type: "category",
        label: "Jinja Function Reference",
        items: [
          "docs/writing-code-in-dbt/jinja-context/adapter",
          "docs/writing-code-in-dbt/jinja-context/as_text",
          "docs/writing-code-in-dbt/jinja-context/builtins",
          "docs/writing-code-in-dbt/jinja-context/config",
          "docs/writing-code-in-dbt/jinja-context/dbt_version",
          "docs/writing-code-in-dbt/jinja-context/debug-method",
          "docs/writing-code-in-dbt/jinja-context/doc",
          "docs/writing-code-in-dbt/jinja-context/env_var",
          "docs/writing-code-in-dbt/jinja-context/exceptions",
          "docs/writing-code-in-dbt/jinja-context/execute",
          "docs/writing-code-in-dbt/jinja-context/flags",
          "docs/writing-code-in-dbt/jinja-context/fromjson",
          "docs/writing-code-in-dbt/jinja-context/fromyaml",
          "docs/writing-code-in-dbt/jinja-context/graph",
          "docs/writing-code-in-dbt/jinja-context/invocation_id",
          "docs/writing-code-in-dbt/jinja-context/log",
          "docs/writing-code-in-dbt/jinja-context/modules",
          "docs/writing-code-in-dbt/jinja-context/project_name",
          "docs/writing-code-in-dbt/jinja-context/ref",
          "docs/writing-code-in-dbt/jinja-context/return",
          "docs/writing-code-in-dbt/jinja-context/run_query",
          "docs/writing-code-in-dbt/jinja-context/run_started_at",
          "docs/writing-code-in-dbt/jinja-context/schema",
          "docs/writing-code-in-dbt/jinja-context/source",
          "docs/writing-code-in-dbt/jinja-context/statement-blocks",
          "docs/writing-code-in-dbt/jinja-context/target",
          "docs/writing-code-in-dbt/jinja-context/this",
          "docs/writing-code-in-dbt/jinja-context/tojson",
          "docs/writing-code-in-dbt/jinja-context/toyaml",
          "docs/writing-code-in-dbt/jinja-context/var",

          "docs/writing-code-in-dbt/jinja-context/profiles-yml-context",
          "docs/writing-code-in-dbt/jinja-context/dbt-project-yml-context",
          "docs/writing-code-in-dbt/jinja-context/on-run-end-context",
        ],
      },
      "docs/writing-code-in-dbt/class-reference",
      {
        type: "category",
        label: "Extending dbt's Programming Environment",
        items: [
          "docs/writing-code-in-dbt/extending-dbts-programming-environment/creating-new-materializations",
          "docs/writing-code-in-dbt/extending-dbts-programming-environment/custom-schema-tests",
        ],
      },
    ],
    "Running a dbt Project": [
      {
        type: "category",
        label: "dbt Command Reference",
        items: [
          "docs/running-a-dbt-project/command-line-interface",
          "docs/running-a-dbt-project/command-line-interface/model-selection-syntax",
          "docs/running-a-dbt-project/command-line-interface/global-cli-flags",
          "docs/running-a-dbt-project/command-line-interface/clean",
          "docs/running-a-dbt-project/command-line-interface/cmd-docs",
          "docs/running-a-dbt-project/command-line-interface/compile",
          "docs/running-a-dbt-project/command-line-interface/debug",
          "docs/running-a-dbt-project/command-line-interface/deps",
          "docs/running-a-dbt-project/command-line-interface/init",
          "docs/running-a-dbt-project/command-line-interface/list",
          "docs/running-a-dbt-project/command-line-interface/rpc",
          "docs/running-a-dbt-project/command-line-interface/run",
          "docs/running-a-dbt-project/command-line-interface/run-operation",
          "docs/running-a-dbt-project/command-line-interface/seed",
          "docs/running-a-dbt-project/command-line-interface/snapshot",
          "docs/running-a-dbt-project/command-line-interface/source",
          "docs/running-a-dbt-project/command-line-interface/test",
          "docs/running-a-dbt-project/command-line-interface/version",
          "docs/running-a-dbt-project/command-line-interface/exit-codes",
        ],
      },
      "docs/running-a-dbt-project/using-the-dbt-ide",
      {
        type: "category",
        label: "Using the CLI",
        items: [
          "docs/running-a-dbt-project/using-the-command-line-interface",
          "docs/running-a-dbt-project/using-the-command-line-interface/installation",
          "docs/running-a-dbt-project/using-the-command-line-interface/configure-your-profile",
          {
            type: "category",
            label: "Installation instructions",
            items: [
              "docs/running-a-dbt-project/using-the-command-line-interface/macos",
              "docs/running-a-dbt-project/using-the-command-line-interface/windows",
              "docs/running-a-dbt-project/using-the-command-line-interface/ubuntu-debian",
              "docs/running-a-dbt-project/using-the-command-line-interface/centos",
              "docs/running-a-dbt-project/using-the-command-line-interface/install-from-source",
            ],
          },
        ],
      },
      "docs/running-a-dbt-project/dbt-api",
      "docs/running-a-dbt-project/running-dbt-in-production",
    ],
    Guides: [
      "docs/guides/best-practices",
      "docs/guides/managing-environments",
      "docs/guides/building-packages",
      {
        type: "category",
        label: "Migration Guides",
        items: [
          "docs/guides/migration-guide/upgrading-from-0-10-to-0-11",
          "docs/guides/migration-guide/upgrading-to-0-12-0",
          "docs/guides/migration-guide/upgrading-to-0-13-0",
          "docs/guides/migration-guide/upgrading-to-014",
          "docs/guides/migration-guide/upgrading-to-0-14-1",
          "docs/guides/migration-guide/upgrading-to-0-15-0",
          "docs/guides/migration-guide/upgrading-to-0-16-0",
          "docs/guides/migration-guide/upgrading-to-0-17-0",
        ],
      },
      "docs/guides/videos",
      //"docs/guides/database-specific-guides/creating-date-partitioned-tables", // deprecated
    ],
    Contributing: [
      "docs/contributing/contributor-license-agreements",
      "docs/contributing/building-a-new-adapter",
      "docs/contributing/slack-rules-of-the-road",
    ],
    About: ["docs/about/license", "docs/about/viewpoint"],
  },
  "dbt Cloud": [
    "docs/dbt-cloud/cloud-overview",
    "docs/dbt-cloud/cloud-quickstart",
    "docs/dbt-cloud/the-dbt-ide",
    {
      type: "category",
      label: "Configuring dbt Cloud",
      items: [
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-your-database",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-using-a-managed-repository",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-configuring-repositories",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-installing-the-github-application",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-import-a-project-by-git-url",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-managing-permissions",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-seats-and-users",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-supported-dbt-versions",
      ],
    },
    {
      type: "category",
      label: "Using dbt Cloud",
      items: [
        "docs/dbt-cloud/using-dbt-cloud/cloud-enabling-continuous-integration-with-github",
        "docs/dbt-cloud/using-dbt-cloud/cloud-generating-documentation",
        "docs/dbt-cloud/using-dbt-cloud/cloud-snapshotting-source-freshness",
        "docs/dbt-cloud/using-dbt-cloud/artifacts",
        "docs/dbt-cloud/using-dbt-cloud/cloud-using-a-custom-cron-schedule",
        "docs/dbt-cloud/using-dbt-cloud/cloud-setting-a-custom-target-name",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Enterprise",
      items: [
        "docs/dbt-cloud/dbt-cloud-enterprise",
        "docs/dbt-cloud/dbt-cloud-enterprise/enterprise-permissions",
        "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-okta",
        "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-google-gsuite",
        "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-sso-with-azure-active-directory",
        "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-snowflake-oauth",
      ],
    },
    {
      type: "category",
      label: "On-Premises",
      items: [
        "docs/dbt-cloud/on-premises/index",
        "docs/dbt-cloud/on-premises/architecture",
        "docs/dbt-cloud/on-premises/prerequisites",
        "docs/dbt-cloud/on-premises/system-requirements",
        "docs/dbt-cloud/on-premises/installation",
        "docs/dbt-cloud/on-premises/setup",
        "docs/dbt-cloud/on-premises/usage-statistics",
      ],
    },
    "docs/dbt-cloud/cloud-changelog",
  ],
  reference: {
    Configurations: [
      "reference/dbt_project.yml",
      {
        type: "category",
        label: "Project configurations",
        items: [
          "reference/project-configs/analysis-paths",
          "reference/project-configs/clean-targets",
          "reference/project-configs/data-paths",
          "reference/project-configs/docs-paths",
          "reference/project-configs/log-path",
          "reference/project-configs/macro-paths",
          "reference/project-configs/modules-path",
          "reference/project-configs/name",
          "reference/project-configs/on-run-end",
          "reference/project-configs/on-run-start",
          "reference/project-configs/profile",
          "reference/project-configs/query-comment",
          "reference/project-configs/quoting",
          "reference/project-configs/require-dbt-version",
          "reference/project-configs/snapshot-paths",
          "reference/project-configs/source-paths",
          "reference/project-configs/target-path",
          "reference/project-configs/test-paths",
          "reference/project-configs/version",
        ],
      },
      "reference/model-configs",
      "reference/seed-configs",
      "reference/source-configs",
      "reference/snapshot-configs",
      {
        type: "category",
        label: "List of general configs",
        items: [
          "reference/resource-configs/alias",
          "reference/resource-configs/database",
          "reference/resource-configs/enabled",
          "reference/resource-configs/persist_docs",
          "reference/resource-configs/post-hook",
          "reference/resource-configs/pre-hook",
          "reference/resource-configs/schema",
          "reference/resource-configs/tags",
        ],
      },
      {
        type: "category",
        label: "List of model configs",
        items: [
          "reference/resource-configs/materialized",
          "reference/resource-configs/sql_header",
        ],
      },
      {
        type: "category",
        label: "List of seed configs",
        items: [
          "reference/resource-configs/column_types",
          "reference/resource-configs/quote_columns",
        ],
      },
      {
        type: "category",
        label: "List of snapshot configs",
        items: [
          "reference/resource-configs/check_cols",
          "reference/resource-configs/strategy",
          "reference/resource-configs/target_database",
          "reference/resource-configs/target_schema",
          "reference/resource-configs/unique_key",
          "reference/resource-configs/updated_at",
        ],
      },
      "reference/resource-configs/bigquery-configs",
      "reference/resource-configs/redshift-configs",
      "reference/resource-configs/snowflake-configs",
      "reference/resource-configs/spark-configs",
      "reference/advanced-config-usage"
    ],
    Properties: [
      "reference/declaring-properties",
      "reference/model-properties",
      "reference/source-properties",
      "reference/seed-properties",
      "reference/snapshot-properties",
      "reference/analysis-properties",
      "reference/macro-properties",
      {
        type: "category",
        label: "List of general properties",
        items: [
          "reference/resource-properties/description",
          "reference/resource-properties/docs",
          "reference/resource-properties/meta",
          "reference/resource-properties/quote",
          "reference/resource-properties/tags",
          "reference/resource-properties/tests",
        ],
      },
      {
        type: "category",
        label: "List of source properties",
        items: [
          "reference/resource-properties/database",
          "reference/resource-properties/freshness",
          "reference/resource-properties/identifier",
          "reference/resource-properties/loader",
          "reference/resource-properties/quoting",
          "reference/resource-properties/schema",
          "reference/resource-properties/overrides",
        ],
      },
    ],
  },
  tutorial: {
    "Getting Started": [
      "tutorial/setting-up",
      {
        type: "category",
        label: "Create a project",
        items: [
          "tutorial/create-a-project-dbt-cloud",
          "tutorial/create-a-project-dbt-cli",
        ],
      },
      "tutorial/build-your-first-models",
      "tutorial/test-and-document-your-project",
      "tutorial/deploy-your-project",
    ],
  },
  learn: {
    "Getting Started": [
      "learn/setting-up",
      {
        type: "category",
        label: "Create a project",
        items: [
          "learn/create-a-project-dbt-cloud",
          "learn/create-a-project-dbt-cli",
        ],
      },
      "learn/build-your-first-models",
      "learn/test-and-document-your-project",
    ],
  },
};
