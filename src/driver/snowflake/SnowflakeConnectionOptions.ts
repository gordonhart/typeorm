import {BaseConnectionOptions} from "../../connection/BaseConnectionOptions";

/**
 * Snowflake-specific connection options.
 */
export interface SnowflakeConnectionOptions extends BaseConnectionOptions {

    /**
     * Database type.
     */
    readonly type: "snowflake";

    /**
     * Database name.
     */
    readonly database: string;

    /**
     * Storage Location
     */
    readonly location: string;
}
