import { RelationInfo } from './RelationInfo'
/**
 * ColumnInfo
 */
export class ColumnInfo {
    name: string = '';
    default: string | null = null;
    is_nullable: boolean = false;
    ts_type: 'number' | 'string' | 'boolean' | 'Date' | 'any';
    sql_type: "char" | "varchar" | "string" | "text" | "number" | "integer" | "int" | "tinyint" | "smallint" | "bigint" |
    "float" | "double" | "decimal" | "date" | "time" | "datetime" | "boolean" | "json";
    char_max_lenght: number | null = null;
    isPrimary: boolean = false;
    is_generated: boolean = false;
    numericPrecision: number | null = null;
    numericScale: number | null = null;
    relations: RelationInfo[];


    constructor() {
        this.relations = [];
    }

}


