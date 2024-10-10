import { RouteError } from '@src/common/classes';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import Example from '@src/repos/Example';
import { ExampleType } from '@src/models/Example';

// **** Variables **** //

export const EXAMPLE_NOT_FOUND_ERR = 'Example not found';

// **** Functions **** //

/**
 * Get all examples.
 */
function getAll(): Promise<ExampleType[]> {
  return Example.getAll();
}

/**
 * Add one example.
 */
function addOne(example: ExampleType): Promise<void> {
  return Example.add(example);
}

/**
 * Update one example.
 */
async function updateOne(example: ExampleType): Promise<void> {
  const persists = await Example.persists(example.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      EXAMPLE_NOT_FOUND_ERR,
    );
  }
  // Return example
  return Example.update(example);
}

/**
 * Delete an example by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await Example.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      EXAMPLE_NOT_FOUND_ERR,
    );
  }
  // Delete example
  return Example.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
