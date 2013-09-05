using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace MVC4Angular.Hubs
{
    public class NotesHub : Hub
    {
        public void AddNote(string note)
        {
            Clients.All.noteAdded(note);
        }
    }
}

