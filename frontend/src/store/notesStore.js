/**
 * @fileoverview Notes store for managing application state with reactive updates
 */

/** @type {Array} Internal notes storage */
let notes = [];

/** @type {Array<Function>} Registered listener callbacks */
let listeners = [];

/**
 * Notes store providing CRUD operations and reactive state management
 * @namespace notesStore
 */
export const notesStore = {
  /**
   * Retrieves all notes from the store
   * @returns {Array} Array of note objects
   */
  getNotes: () => notes,
  
  /**
   * Adds a new note to the store
   * @param {Object} note - Note object to add
   * @returns {void}
   */
  addNote: (note) => {
    notes = [...notes, { ...note, id: Date.now() }];
    notifyListeners();
  },
  
  /**
   * Updates an existing note by ID
   * @param {number} id - ID of the note to update
   * @param {Object} updates - Properties to update
   * @returns {void}
   */
  updateNote: (id, updates) => {
    notes = notes.map(n => n.id === id ? { ...n, ...updates } : n);
    notifyListeners();
  },
  
  /**
   * Deletes a note by ID
   * @param {number} id - ID of the note to delete
   * @returns {void}
   */
  deleteNote: (id) => {
    notes = notes.filter(n => n.id !== id);
    notifyListeners();
  },
  
  /**
   * Subscribes to store changes
   * @param {Function} listener - Callback function to invoke on state changes
   * @returns {Function} Unsubscribe function
   */
  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }
};

/**
 * Notifies all subscribed listeners of state changes
 * @private
 * @returns {void}
 */
const notifyListeners = () => {
  listeners.forEach(listener => listener(notes));
};