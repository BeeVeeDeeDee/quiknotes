let notes = [];
let listeners = [];

export const notesStore = {
  getNotes: () => notes,
  
  addNote: (note) => {
    notes = [...notes, { ...note, id: Date.now() }];
    notifyListeners();
  },
  
  updateNote: (id, updates) => {
    notes = notes.map(n => n.id === id ? { ...n, ...updates } : n);
    notifyListeners();
  },
  
  deleteNote: (id) => {
    notes = notes.filter(n => n.id !== id);
    notifyListeners();
  },
  
  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }
};

const notifyListeners = () => {
  listeners.forEach(listener => listener(notes));
};