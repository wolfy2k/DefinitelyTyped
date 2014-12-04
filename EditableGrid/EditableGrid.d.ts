
declare class Column {
    constructor(configuration?: ColumnOptions);
    getOptionValuesForRender(rowIndex): any;
    getOptionValuesForEdit(rowIndex);
    isValid(value): boolean;
    isNumerical(): boolean;
}

interface ColumnOptions {

    name?: string;
    label?: string;
    editable?: boolean;
    renderable?: boolean;
    datatype?: string;
    unit?: any;
    precision?: number; // means that all decimals are displayed
    nansymbol?: string;
    decimal_point?: string;
    thousands_separator?: string;
    unit_before_number?: boolean;
    bar?: boolean; // is the column to be displayed in a bar chart ? relevant only for numerical columns 
    hidden?: boolean; // should the column be hidden by default
    headerRenderer?: any;
    headerEditor?: any;
    cellRenderer?: any;
    cellEditor?: any;
    cellValidators?: any[];
    enumProvider?: any;
    optionValues?: any;
    optionValuesForRender?: any;
    columnIndex?: number;

}

declare class CellEditor {
    constructor(configuration?: any);
}

declare class CellRenderer {
    constructor(configuration?: any);
}

declare class CellValidator {
    constructor(configuration?: any);
}

declare class CheckboxCellRenderer {
    constructor(configuration?: any);
}

declare class DateCellEditor {
    constructor(configuration?: any);
}
declare class DateCellRenderer {
    constructor(configuration?: any);
}

declare class DateCellValidator {
    constructor(configuration?: any);
}

declare class EmailCellRenderer {
    constructor(configuration?: any);
}

declare class EmailCellValidator {
    constructor();
}

declare class EnumCellRenderer {
    constructor(configuration?: any);
}

declare class EnumProvider {
    constructor(configuration?: any);
}

declare class NumberCellEditor {
    constructor(type?: any, configuration?: any);
}

declare class NumberCellRenderer {
    constructor(configuration?: any);
}


declare class NumberCellValidator {
    constructor(type?: any);
}


declare class SelectCellEditor {
    constructor(configuration?: any);
}

declare class SortHeaderRenderer {
    constructor(columnName?: any, cellRenderer?: any);
}

declare class TextCellEditor {
    constructor(size?: number, maxlen?: number, configuration?: any);
}

declare class WebsiteCellRenderer {
    constructor(configuration?: any);
}

declare class WebsiteCellValidator {
    constructor();
}


declare class EditableGrid implements EditableGridOptions {

    constructor(name: string, configuration?: EditableGridOptions);

    //events
    tableLoaded: () => void;
    chartRendered: () => void;
    tableRendered: (containerid, className, tableid) => void;
    tableSorted: (columnIndex, descending) => void;
    tableFiltered: () => void;
    modelChanged: (rowIndex, columnIndex, oldValue, newValue, row) => void;
    rowSelected: (oldRowIndex, newRowIndex) => void;
    isHeaderEditable: (rowIndex, columnIndex) => boolean;
    isEditable: (rowIndex, columnIndex) => boolean;
    readonlyWarning: () => void;
    rowRemoved: (oldRowIndex, rowId) => void;


    //methods
    addCellValidator(columnIndexOrName, cellValidator): void;
    addDefaultCellValidators(columnIndexOrName): void;
    addRow(rowId, cellValues, rowAttributes, dontSort): void;
    append(rowId, cellValues, rowAttributes, dontSort): void;
    attachToHTMLTable(_table, _columns?): void;
    canGoBack(): boolean;
    canGoForward(): boolean;
    clearCellValidators(columnIndexOrName);
    clearChart(divId): void;
    filter(filterString): void;
    firstPage(): void;
    getCell(rowIndex, columnIndex);
    getColumn(columnIndexOrName): Column;
    getColumnCount(): number;
    getColumnIndex(columnIndexOrName): any;
    getColumnLabel(columnIndexOrName): string;
    getColumnName(columnIndexOrName): string;
    getColumnPrecision(columnIndexOrName): number;
    getColumnType(columnIndexOrName): any;
    getColumnUnit(columnIndexOrName): any;
    getCurrentPageIndex(): number;
    getDisplayValueAt(rowIndex, columnIndex): any;
    getPageCount(): number;
    getPagesInInterval(interval, callback): any[];
    getRow(index): any;
    getRowAttribute(index, name): any;
    getRowCount(): number;
    getRowId(index): any;
    getRowIndex(rowId): any;
    getRowValues(rowIndex): any[];
    getSlidingPageInterval(slidingWindowSize): any;
    getValueAt(rowIndex, columnIndex): any;
    hasColumn(columnIndexOrName): boolean;
    insert(rowIndex, rowId, cellValues, rowAttributes, dontSort);
    insertAfter(rowIndex, rowId, cellValues, rowAttributes, dontSort);
    isColumnBar(columnIndexOrName): boolean
    isColumnNumerical(columnIndexOrName): boolean
    isSame(v1, v2): boolean;
    lastPage(): void;
    load(object): void;
    loadJSON(url): void;
    loadJSONFromString(json): void;
    loadXML(url): void;
    loadXMLFromString(xml): void;
    nextPage(): void;
    prevPage(): void;
    refreshGrid(): void;
    remove(rowIndex): void;
    removeRow(rowId): void;
    renderBarChart(divId, title, labelColumnIndexOrName, options): void;
    renderGrid(containerid?, className?, tableid?): void;
    renderPieChart(divId, title, valueColumnIndexOrName, labelColumnIndexOrName, options): void;
    renderStackedBarChart(divId, title, labelColumnIndexOrName, options): void;
    setCaption(columnIndexOrName, caption): void;
    setCellEditor(columnIndexOrName, cellEditor);
    setCellRenderer(columnIndexOrName, cellRenderer): void;
    setEnumProvider(columnIndexOrName, enumProvider): void;
    setHeaderEditor(columnIndexOrName, cellEditor): void;
    setHeaderRenderer(columnIndexOrName, cellRenderer): void;
    setPageIndex(pageIndex): void;
    setPageSize(pageSize): void;
    setRowAttribute(index, name, value): void;
    setValueAt(rowIndex, columnIndex, value, render): void;
    sort(columnIndexOrName, descending, backOnFirstPage): void;
    updateChart(divId, chart): void;
}



interface EditableGridOptions {
    enableSort?: boolean;
    doubleclick?: boolean;
    editmode?: string;
    editorzoneid?: string;
    allowSimultaneousEdition?: boolean;
    saveOnBlur?: boolean;
    invalidClassName?: string;
    ignoreLastRow?: boolean;
    caption?: string;
    dateFormat?: string;
    shortMonthNames?: string[];
    smartColorsBar?: string[]
    smartColorsPie?: string[]
    pageSize?: number;
}
