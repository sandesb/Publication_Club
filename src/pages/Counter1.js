import React, { useState } from "react";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter1 = () => {
  const [umCount, setUmCount] = useState(0);
  const [ahCount, setAhCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [butCount, setButCount] = useState(0);
  const [soCount, setSoCount] = useState(0);

  const [username, setUsername] = useState('');
  const [previousEntries, setPreviousEntries] = useState([]);
  const [customCounts, setCustomCounts] = useState([]);
  const [newFillerWord, setNewFillerWord] = useState('');
  const [showInput, setShowInput] = useState(true);

  const incrementCount = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const decrementCount = (setter) => {
    setter((prevCount) => prevCount - 1);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const saveEntry = () => {
    const newEntry = {
      name: username,
      umCount,
      ahCount,
      likeCount,
      butCount,
      soCount,
      otherCounts: customCounts.map(item => ({ word: item.word, count: item.count }))
    };
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `${newEntry.name}'s Counts Saved In The Table Below.`,
      showConfirmButton: false,
      timer: 1500
    });
    setPreviousEntries((prevEntries) => [...prevEntries, newEntry]);
    setUsername('');
    setUmCount(0);
    setAhCount(0);
    setLikeCount(0);
    setButCount(0);
    setSoCount(0);
    setCustomCounts([]);
    setNewFillerWord('');
    setShowInput(true);
  };

  const addCustomCount = () => {
    if (newFillerWord.trim() !== '') {
      setCustomCounts((prevCounts) => [
        ...prevCounts,
        { word: newFillerWord, count: 1 }
      ]);
      setNewFillerWord('');
      setShowInput(false);
      toast.info(`🦄 Custom Word '${newFillerWord}' Added!`, {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  const incrementCustomCount = (index) => {
    setCustomCounts((prevCounts) =>
      prevCounts.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleNewFillerWordChange = (event) => {
    setNewFillerWord(event.target.value);
  };

  return (
    <div>
      <div className="group">      
        <input 
          type="text" 
          className="uname"
          onChange={handleUsernameChange}
          value={username} 
          required
        />
        <span className="highlight"></span>
        <label className="label1">Name</label>
        <button id="save-btn" onClick={saveEntry}>SAVE</button>
      </div>
      
      <div className="flex6">
        <div className="container bootstrap snippets bootdeys">
          <div className="row">
            {/* 'Um' Count */}
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                  <div className="content">
                    <h6 className="description">'Um' Count</h6>
                    <h2 id="count-el">{umCount}</h2>
                    <button onClick={() => incrementCount(setUmCount)} className="um-button">➕</button>
                    <button onClick={() => decrementCount(setUmCount)} className="um-button">➖</button>
                  </div>
                </div> 
              </div>
            </div>
            
            {/* 'Ah' Count */}
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                  <div className="content">
                    <h6 className="description">'Ah' Count</h6>
                    <h2 id="count-el">{ahCount}</h2>
                    <button onClick={() => incrementCount(setAhCount)} className="um-button">➕</button>
                    <button onClick={() => decrementCount(setAhCount)} className="um-button">➖</button>
                  </div>
                </div> 
              </div>
            </div>

            {/* 'Like' Count */}
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                  <div className="content">
                    <h6 className="description">'Like' Count</h6>
                    <h2 id="count-el">{likeCount}</h2>
                    <button onClick={() => incrementCount(setLikeCount)} className="um-button">➕</button>
                    <button onClick={() => decrementCount(setLikeCount)} className="um-button">➖</button>
                  </div>
                </div> 
              </div>
            </div>

            {/* 'But' Count */}
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                  <div className="content">
                    <h6 className="description">'But' Count</h6>
                    <h2 id="count-el">{butCount}</h2>
                    <button onClick={() => incrementCount(setButCount)} className="um-button">➕</button>
                    <button onClick={() => decrementCount(setButCount)} className="um-button">➖</button>
                  </div>
                </div> 
              </div>
            </div>
            
            {/* 'So' Count */}
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                  <div className="content">
                    <h6 className="description">'So' Count</h6>
                    <h2 id="count-el">{soCount}</h2>
                    <button onClick={() => incrementCount(setSoCount)} className="um-button">➕</button>
                    <button onClick={() => decrementCount(setSoCount)} className="um-button">➖</button>
                  </div>
                </div> 
              </div>
            </div>
            
            {/* Custom Count */}
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                  <div className="content">
                    <h1 className="description">'Custom' Count</h1>
                    {customCounts.map((item, index) => (
                      <div key={index}>
                        <h2>{item.word}</h2>
                        <h2 id="count-el">{item.count}</h2>
                        <button onClick={() => incrementCustomCount(index)} className="plus-button1">
                          ➕
                        </button>
                      </div>
                    ))}
                    {showInput && (
                      <div className="custom">
                        <input
                          type="text"
                          className="custom-word"
                          value={newFillerWord}
                          onChange={handleNewFillerWordChange}
                          required
                        />
                        <button className="plus-button1" onClick={addCustomCount}>➕</button>
                      </div>
                    )}
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="table-flex">
        <table className="rep-table table1">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th>Um</th>
              <th>Ah</th>
              <th>Like</th>
              <th>But</th>
              <th>So</th>
              <th>New</th>        
            </tr>
          </thead>
          <tbody>
            {previousEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.umCount}</td>
                <td>{entry.ahCount}</td>
                <td>{entry.likeCount}</td>
                <td>{entry.butCount}</td>
                <td>{entry.soCount}</td>
                <td>
                  {entry.otherCounts.map((item, idx) => (
                    <div key={idx}>
                      {item.word}: {item.count}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Counter1;
