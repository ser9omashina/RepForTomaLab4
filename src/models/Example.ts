import moment from 'moment';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must be a string or an object ' + 
  'with the appropriate example keys.';

// **** Types **** //

export type ExampleType = {
  id: number;
  name: string;
};

// **** Functions **** //

/**
 * Create new Example.
 */
function new_(
  name?: string,
  id?: number, // id last cause usually set by db
): ExampleType {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
  };
}

/**
 * Get example instance from object.
 */
function from(param: object): ExampleType {
  if (isExample(param)) {
    return new_(param.name, param.id);
  }
  throw new Error(INVALID_CONSTRUCTOR_PARAM);
}

/**
 * See if the param meets criteria to be an example.
 */
function isExample(arg: unknown): arg is ExampleType {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' &&
    'name' in arg && typeof arg.name === 'string'
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isExample,
} as const;