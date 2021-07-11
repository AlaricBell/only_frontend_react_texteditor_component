import React, {Component} from 'react';
import EditorJs from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Code from '@editorjs/code';
import SimpleImage from '@editorjs/simple-image';
import Checklist from '@editorjs/checklist';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';

class Editor extends Component {
  render() {
    return (
      <div className="container container-editor">
        <div id="editorjs">

        </div>
        <button id="btn-save" onClick={() => editor.save()}>Save</button>
      </div>
    );
  }
}

const editor = new EditorJs({
  holderId: 'editorjs',
  autofocus: true,
  placeholder: 'Create your post here!',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link'],
      levels: [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      defaultLevel: 1
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
    marker: {
      class: Marker,
    },
    image: {
      class: SimpleImage,
      inlineToolbar: true,
      config: {
        placeholder: 'Paste image URL'
      }
    },
    code: {
      class: Code,
      inlineToolbar: false,
    },
    inlineCode: {
      class: InlineCode,
      inlineToolbar: true,
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true,
        }
      },
    }
  }
})

export default Editor;