import classNames from 'classnames';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import { AutoSizer, List } from 'react-virtualized';
import { ThemedScrollbars } from '@deriv/components';
import PropTypes from 'prop-types';
import React from 'react';
import TableRow from './table-row.jsx';

/* TODO:
      1. implement sorting by column (ASC/DESC)
      2. implement filtering per column
*/

class DataTable extends React.PureComponent {
    handleScroll = ({ target }) => {
        const { scrollTop, scrollLeft } = target;
        this.list_ref.Grid.handleScrollEvent({ scrollTop, scrollLeft });
    };

    rowRenderer = ({
        index, // Index of row
        style, // Style object to be applied to row (to position it);
    }) => {
        const { className, getRowAction, columns, data_source, preloaderCheck, getActionColumns } = this.props;
        const item = data_source[index];
        const action = getRowAction && getRowAction(item);
        const contract_id = data_source[index].contract_id || data_source[index].id;

        // If row content is complex, consider rendering a light-weight placeholder while scrolling.
        const content = (
            <TableRow
                className={className}
                row_obj={item}
                columns={columns}
                id={contract_id}
                key={contract_id}
                to={typeof action === 'string' ? action : undefined}
                show_preloader={typeof preloaderCheck === 'function' ? preloaderCheck(item) : null}
                replace={typeof action === 'object' ? action : undefined}
                getActionColumns={getActionColumns}
            />
        );

        return (
            <div key={contract_id} style={style}>
                {content}
            </div>
        );
    };

    render() {
        const {
            children,
            className,
            columns,
            data_source,
            footer,
            getActionColumns,
            getRowSize,
            is_empty,
            onScroll,
        } = this.props;

        const TableData = (
            <AutoSizer>
                {({ width, height }) => (
                    <React.Fragment>
                        <ThemedScrollbars
                            style={{
                                height,
                                width,
                            }}
                            onScroll={this.handleScroll}
                            autoHide
                        >
                            <List
                                ref={ref => (this.list_ref = ref)}
                                style={{ overflow: 'inherit' }}
                                className={className}
                                containerStyle={{ marginBottom: 117 }}
                                height={height}
                                overscanRowCount={4}
                                rowCount={data_source.length}
                                rowHeight={getRowSize()}
                                rowRenderer={this.rowRenderer}
                                width={width}
                            />
                        </ThemedScrollbars>
                        {children}
                    </React.Fragment>
                )}
            </AutoSizer>
        );

        return (
            <div
                className={classNames('table', {
                    [`${className}`]: className,
                    [`${className}__table`]: className,
                    [`${className}__content`]: className,
                })}
            >
                <div
                    className='table__head'
                    ref={el => {
                        this.el_table_head = el;
                    }}
                >
                    <TableRow className={className} columns={columns} is_header getActionColumns={getActionColumns} />
                </div>
                <div
                    className='table__body'
                    ref={el => {
                        this.el_table_body = el;
                    }}
                    onScroll={onScroll}
                >
                    {TableData}
                </div>

                {footer && (
                    <div className='table__foot'>
                        <TableRow
                            className={className}
                            row_obj={footer}
                            columns={columns}
                            is_footer
                            getActionColumns={getActionColumns}
                        />
                    </div>
                )}
            </div>
        );
    }
}

DataTable.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    className: PropTypes.string,
    columns: PropTypes.array,
    data_source: MobxPropTypes.arrayOrObservableArray,
    footer: PropTypes.object,
    getRowAction: PropTypes.func,
    getRowSize: PropTypes.func,
    onScroll: PropTypes.func,
};

export default DataTable;
