import React, { Component} from "react";
import axios from "axios";
class Edit extends Component{

  constructor(props){
    super(props);
    this.state={
        list:[],
        loading:false
    };
  }
  componentDidMount(){
    axios.get('/api/list.json')
    .then((res)=>{console.log(res);
        this.setState({
            loading:false,
            list:res.data.result||[]
        }
        );
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const {list,loading}=this.state;
    return(
      <div className="m-list">
        <header>
            <div className="m-left"></div>
            <div className="m-right">
                <a>新增</a>
            </div>
        </header>
        <table>
            <thead>
                <tr>
                    <th><label><input type="checkbox"/>ID</label></th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Operate</th>
                </tr>
            </thead>
            {loading?<tbody><tr><td colSpan="4">正在加载...</td></tr></tbody>:
            <tbody>
            {list.map(item=>(
                <tr key={item.id}>
                    <td>
                        <label><input type="checkbox"/>{item.id}</label>
                        
                    </td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><a>编辑</a><a>删除</a></td>
                </tr>
            ))}
            </tbody>
            }
            <tfoot>
                <tr>
                    <td colSpan="4">
                        <a>全部删除</a>
                    </td>
                </tr>
            </tfoot>
        </table>
      </div>
    );
  }
}

export default Edit;